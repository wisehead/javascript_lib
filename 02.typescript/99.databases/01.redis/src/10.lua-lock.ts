import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * Lua 脚本 + 分布式锁。
 * 锁的两个要点：加锁用 SET NX EX（原子），解锁用 Lua 校验 owner 再删（防止误删别人的锁）。
 */

const UNLOCK_SCRIPT = `
if redis.call("get", KEYS[1]) == ARGV[1] then
  return redis.call("del", KEYS[1])
else
  return 0
end
`;

/** 限流脚本：窗口内计数，超过上限返回 0。 */
const RATE_LIMIT_SCRIPT = `
local current = redis.call("incr", KEYS[1])
if current == 1 then
  redis.call("expire", KEYS[1], tonumber(ARGV[2]))
end
if current > tonumber(ARGV[1]) then
  return 0
end
return 1
`;

async function acquireLock(redis: Redis, key: string, owner: string, ttlSec: number): Promise<boolean> {
    const res = await redis.set(key, owner, 'EX', ttlSec, 'NX');
    return res === 'OK';
}

async function releaseLock(redis: Redis, key: string, owner: string): Promise<boolean> {
    const res = (await redis.eval(UNLOCK_SCRIPT, 1, key, owner)) as number;
    return res === 1;
}

export async function luaLockDemo(redis: Redis): Promise<void> {
    const lockKey = 'demo:lock:order:1001';
    await redis.del(lockKey);

    // 加锁 / 重复加锁
    console.log('A 加锁          =', await acquireLock(redis, lockKey, 'owner-A', 30));
    console.log('B 加锁          =', await acquireLock(redis, lockKey, 'owner-B', 30));

    // 用错 owner 解锁应当失败
    console.log('B 解锁(错误)    =', await releaseLock(redis, lockKey, 'owner-B'));
    console.log('A 解锁          =', await releaseLock(redis, lockKey, 'owner-A'));
    console.log('锁是否还在      =', await redis.exists(lockKey));

    // 限流：每 10 秒最多 3 次
    const rlKey = 'demo:ratelimit:user:1';
    await redis.del(rlKey);
    for (let i = 1; i <= 5; i++) {
        const allowed = (await redis.eval(RATE_LIMIT_SCRIPT, 1, rlKey, '3', '10')) as number;
        console.log(`第 ${i} 次请求     =`, allowed === 1 ? '放行' : '被限流');
    }

    // defineCommand：把脚本注册成方法，ioredis 内部用 EVALSHA，更省带宽
    redis.defineCommand('unlockScript', { numberOfKeys: 1, lua: UNLOCK_SCRIPT });
    await redis.set(lockKey, 'owner-C', 'EX', 30);
    const custom = redis as Redis & { unlockScript(key: string, owner: string): Promise<number> };
    console.log('defineCommand   =', await custom.unlockScript(lockKey, 'owner-C'));
}

if (require.main === module) {
    void runDemo('Lua 脚本与分布式锁', luaLockDemo);
}
