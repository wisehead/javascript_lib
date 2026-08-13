import Redis from 'ioredis';
import { createClient, runDemo } from './client';

/**
 * List：双向链表，常用于简单消息队列、最近浏览记录。
 */
export async function listDemo(redis: Redis): Promise<void> {
    const key = 'demo:list:queue';
    await redis.del(key);

    // 左右压入
    await redis.rpush(key, 'a', 'b', 'c');
    await redis.lpush(key, 'head');
    console.log('LRANGE 全部     =', await redis.lrange(key, 0, -1));

    console.log('LLEN            =', await redis.llen(key));
    console.log('LINDEX 0        =', await redis.lindex(key, 0));

    // 弹出：LPOP + RPUSH 组成先进先出队列
    console.log('LPOP            =', await redis.lpop(key));
    console.log('RPOP            =', await redis.rpop(key));
    console.log('剩余            =', await redis.lrange(key, 0, -1));

    // LTRIM 保留最近 N 条（做“最近浏览”很常见）
    await redis.del(key);
    await redis.rpush(key, '1', '2', '3', '4', '5', '6');
    await redis.ltrim(key, -3, -1);
    console.log('LTRIM 保留后3条 =', await redis.lrange(key, 0, -1));

    // LREM 删除指定值
    await redis.rpush(key, '4', '4');
    await redis.lrem(key, 1, '4');
    console.log('LREM 1 个 4 后  =', await redis.lrange(key, 0, -1));

    // BLPOP 阻塞消费：必须用独立连接，否则会堵住主连接的其他命令
    const consumer = createClient();
    try {
        const popped = consumer.blpop('demo:list:blocking', 5); // 最多等 5 秒
        await redis.rpush('demo:list:blocking', 'job-1');
        console.log('BLPOP 拿到      =', await popped);
    } finally {
        await consumer.quit();
    }

    await redis.expire(key, 300);
}

if (require.main === module) {
    void runDemo('List 操作', listDemo);
}
