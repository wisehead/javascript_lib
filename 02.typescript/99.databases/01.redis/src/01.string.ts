import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * String：最常用的类型，缓存对象 JSON、计数器、分布式开关都靠它。
 */
export async function stringDemo(redis: Redis): Promise<void> {
    // SET / GET
    await redis.set('demo:string:name', 'wisehead');
    console.log('GET name        =', await redis.get('demo:string:name'));

    // SET 带过期时间（EX 秒 / PX 毫秒）
    await redis.set('demo:string:token', 'abc123', 'EX', 60);
    console.log('TTL token       =', await redis.ttl('demo:string:token'));

    // SET NX：键不存在时才写入，返回 null 表示没抢到（分布式锁的基础）
    const first = await redis.set('demo:string:lock', 'owner-A', 'EX', 30, 'NX');
    const second = await redis.set('demo:string:lock', 'owner-B', 'EX', 30, 'NX');
    console.log('SET NX 第一次   =', first, '/ 第二次 =', second);

    // 计数器：INCR / INCRBY / DECR，Redis 单线程保证原子性
    await redis.del('demo:string:counter');
    await redis.incr('demo:string:counter');
    await redis.incrby('demo:string:counter', 10);
    await redis.decr('demo:string:counter');
    console.log('counter         =', await redis.get('demo:string:counter'));

    // 浮点自增
    await redis.set('demo:string:price', '10.5');
    console.log('INCRBYFLOAT     =', await redis.incrbyfloat('demo:string:price', 0.25));

    // 批量读写：MSET / MGET，一次 RTT 搞定多个 key
    await redis.mset({ 'demo:string:a': '1', 'demo:string:b': '2', 'demo:string:c': '3' });
    console.log('MGET a,b,c      =', await redis.mget('demo:string:a', 'demo:string:b', 'demo:string:c'));

    // 存对象：序列化成 JSON
    const user = { id: 1, name: 'wisehead', tags: ['ts', 'redis'] };
    await redis.set('demo:string:user:1', JSON.stringify(user), 'EX', 300);
    const raw = await redis.get('demo:string:user:1');
    console.log('JSON 对象       =', raw ? (JSON.parse(raw) as typeof user) : null);

    // 追加与长度
    console.log('APPEND 后长度   =', await redis.append('demo:string:name', '-2026'));
    console.log('STRLEN          =', await redis.strlen('demo:string:name'));
}

if (require.main === module) {
    void runDemo('String 操作', stringDemo);
}
