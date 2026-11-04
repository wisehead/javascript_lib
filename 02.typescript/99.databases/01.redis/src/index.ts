import { redis } from './client';
import { stringDemo } from './01.string';
import { hashDemo } from './02.hash';
import { listDemo } from './03.list';
import { setDemo } from './04.set';
import { zsetDemo } from './05.zset';
import { keyDemo } from './06.key-expire';
import { transactionDemo } from './07.transaction-pipeline';
import { pubsubDemo } from './08.pubsub';
import { scanDemo } from './09.scan';
import { luaLockDemo } from './10.lua-lock';

const demos = [
    ['String 操作', stringDemo],
    ['Hash 操作', hashDemo],
    ['List 操作', listDemo],
    ['Set 操作', setDemo],
    ['ZSet 操作', zsetDemo],
    ['Key / 过期操作', keyDemo],
    ['事务与 Pipeline', transactionDemo],
    ['发布订阅', pubsubDemo],
    ['SCAN 遍历', scanDemo],
    ['Lua 脚本与分布式锁', luaLockDemo],
] as const;

async function main(): Promise<void> {
    console.log('连接 Redis:', `${redis.options.host}:${redis.options.port}`);
    for (const [name, fn] of demos) {
        console.log(`\n===== ${name} =====`);
        await fn(redis);
    }
}

main()
    .catch((err) => {
        console.error('示例执行失败:', err);
        process.exitCode = 1;
    })
    .finally(() => redis.quit());
