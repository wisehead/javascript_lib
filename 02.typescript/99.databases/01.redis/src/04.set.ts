import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * Set：无序去重集合，适合标签、点赞用户、共同好友这类需求。
 */
export async function setDemo(redis: Redis): Promise<void> {
    const a = 'demo:set:userA:tags';
    const b = 'demo:set:userB:tags';
    await redis.del(a, b);

    await redis.sadd(a, 'ts', 'redis', 'node', 'vue');
    await redis.sadd(b, 'ts', 'redis', 'go');

    console.log('SMEMBERS A      =', (await redis.smembers(a)).sort());
    console.log('SCARD A         =', await redis.scard(a));
    console.log('SISMEMBER go    =', await redis.sismember(a, 'go'));

    // 集合运算
    console.log('交集 SINTER     =', (await redis.sinter(a, b)).sort());
    console.log('并集 SUNION     =', (await redis.sunion(a, b)).sort());
    console.log('差集 SDIFF A-B  =', (await redis.sdiff(a, b)).sort());

    // 运算结果直接落库
    await redis.sinterstore('demo:set:common', a, b);
    console.log('SINTERSTORE     =', (await redis.smembers('demo:set:common')).sort());

    // 随机取 / 随机弹出：抽奖场景
    console.log('SRANDMEMBER 2   =', await redis.srandmember(a, 2));
    console.log('SPOP            =', await redis.spop(a));

    await redis.srem(a, 'vue');
    console.log('SREM vue 后     =', (await redis.smembers(a)).sort());

    await redis.expire(a, 300);
    await redis.expire(b, 300);
    await redis.expire('demo:set:common', 300);
}

if (require.main === module) {
    void runDemo('Set 操作', setDemo);
}
