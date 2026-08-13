import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * ZSet：带分数的有序集合，排行榜、延时队列、时间线都用它。
 */
export async function zsetDemo(redis: Redis): Promise<void> {
    const key = 'demo:zset:rank';
    await redis.del(key);

    // ZADD：score 在前，member 在后
    await redis.zadd(key, 100, 'alice', 85, 'bob', 92, 'carol', 77, 'dave');

    // 升序 / 降序，WITHSCORES 返回 [member, score, member, score...]
    console.log('ZRANGE 升序     =', await redis.zrange(key, 0, -1));
    console.log('前 3 名         =', await redis.zrevrange(key, 0, 2, 'WITHSCORES'));

    console.log('ZSCORE alice    =', await redis.zscore(key, 'alice'));
    console.log('ZREVRANK carol  =', await redis.zrevrank(key, 'carol')); // 0 起算
    console.log('ZCARD           =', await redis.zcard(key));

    // 分数区间查询与统计
    console.log('ZCOUNT 80~100   =', await redis.zcount(key, 80, 100));
    console.log('ZRANGEBYSCORE   =', await redis.zrangebyscore(key, 80, 100));

    // 加分
    console.log('ZINCRBY bob +10 =', await redis.zincrby(key, 10, 'bob'));

    // 按排名 / 分数删除，常用于裁剪排行榜
    await redis.zremrangebyrank(key, 0, 0); // 删掉分数最低的一个
    console.log('裁剪后          =', await redis.zrange(key, 0, -1, 'WITHSCORES'));

    // 用 score 存时间戳 => 延时队列：取出到期的任务
    const delayKey = 'demo:zset:delay';
    await redis.del(delayKey);
    const now = Date.now();
    await redis.zadd(delayKey, now - 1000, 'task-due', now + 60_000, 'task-later');
    const due = await redis.zrangebyscore(delayKey, '-inf', now);
    console.log('到期任务        =', due);
    if (due.length > 0) {
        await redis.zrem(delayKey, ...due);
    }

    await redis.expire(key, 300);
    await redis.expire(delayKey, 300);
}

if (require.main === module) {
    void runDemo('ZSet 操作', zsetDemo);
}
