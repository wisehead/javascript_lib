import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * 通用 key 操作：存在性、过期时间、重命名、类型。
 */
export async function keyDemo(redis: Redis): Promise<void> {
    const key = 'demo:key:sample';
    await redis.set(key, 'value');

    console.log('EXISTS          =', await redis.exists(key));
    console.log('TYPE            =', await redis.type(key));

    // 过期时间：-1 表示永不过期，-2 表示 key 不存在
    console.log('TTL(未设置)     =', await redis.ttl(key));
    await redis.expire(key, 100);
    console.log('EXPIRE 100 后   =', await redis.ttl(key));
    await redis.pexpire(key, 120_000);
    console.log('PTTL(毫秒)      =', await redis.pttl(key));

    // 指定到期时间点
    await redis.expireat(key, Math.floor(Date.now() / 1000) + 300);
    console.log('EXPIREAT 后 TTL =', await redis.ttl(key));

    // PERSIST 去掉过期时间
    await redis.persist(key);
    console.log('PERSIST 后 TTL  =', await redis.ttl(key));

    // 重命名
    await redis.rename(key, 'demo:key:renamed');
    console.log('RENAME 后 EXISTS=', await redis.exists('demo:key:renamed'));

    // 删除：DEL 同步，UNLINK 异步回收（大 key 用 UNLINK 更安全）
    console.log('UNLINK          =', await redis.unlink('demo:key:renamed'));
    console.log('TTL(不存在的key)=', await redis.ttl('demo:key:renamed'));

    // 服务器信息
    console.log('PING            =', await redis.ping());
    console.log('DBSIZE          =', await redis.dbsize());
    const info = await redis.info('server');
    const version = info.split('\n').find((line) => line.startsWith('redis_version'));
    console.log('版本            =', version?.trim());
}

if (require.main === module) {
    void runDemo('Key / 过期操作', keyDemo);
}
