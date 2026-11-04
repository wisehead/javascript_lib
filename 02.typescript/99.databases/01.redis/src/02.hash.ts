import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * Hash：一个 key 下存多个 field，适合存对象且只想改其中一个字段的场景。
 */
export async function hashDemo(redis: Redis): Promise<void> {
    const key = 'demo:hash:user:1';
    await redis.del(key);

    // HSET 单字段 / 多字段
    await redis.hset(key, 'name', 'wisehead');
    await redis.hset(key, { age: '30', city: 'Beijing', score: '95' });

    console.log('HGET name       =', await redis.hget(key, 'name'));
    console.log('HMGET name,city =', await redis.hmget(key, 'name', 'city'));
    console.log('HGETALL         =', await redis.hgetall(key));

    // 字段级操作
    console.log('HEXISTS age     =', await redis.hexists(key, 'age'));
    console.log('HINCRBY score+3 =', await redis.hincrby(key, 'score', 3));
    console.log('HLEN            =', await redis.hlen(key));
    console.log('HKEYS           =', await redis.hkeys(key));
    console.log('HVALS           =', await redis.hvals(key));

    // HSETNX：字段不存在才写
    console.log('HSETNX name     =', await redis.hsetnx(key, 'name', '不会覆盖'));
    console.log('HSETNX email    =', await redis.hsetnx(key, 'email', 'a@b.com'));

    // 删除字段
    await redis.hdel(key, 'city');
    console.log('HDEL city 后    =', await redis.hgetall(key));

    // 大 hash 用 HSCAN 增量遍历，避免 HGETALL 阻塞
    const [cursor, flat] = await redis.hscan(key, '0', 'COUNT', 10);
    console.log('HSCAN cursor    =', cursor, ', 字段数 =', flat.length / 2);

    await redis.expire(key, 300);
}

if (require.main === module) {
    void runDemo('Hash 操作', hashDemo);
}
