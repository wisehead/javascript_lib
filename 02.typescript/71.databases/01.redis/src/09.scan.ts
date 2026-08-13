import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * 遍历 key：生产环境禁用 KEYS（O(N) 会阻塞），用 SCAN 游标分批取。
 */
export async function scanDemo(redis: Redis): Promise<void> {
    // 造点数据
    const seed = redis.pipeline();
    for (let i = 0; i < 20; i++) {
        seed.set(`demo:scan:item:${i}`, String(i), 'EX', 300);
    }
    await seed.exec();

    // 手动游标循环：cursor 为 '0' 表示遍历结束
    const found: string[] = [];
    let cursor = '0';
    do {
        const [next, keys] = await redis.scan(cursor, 'MATCH', 'demo:scan:item:*', 'COUNT', 5);
        cursor = next;
        found.push(...keys);
    } while (cursor !== '0');
    console.log('SCAN 命中数量   =', found.length);

    // ioredis 提供的流式写法，更省事
    const streamed: string[] = await new Promise((resolve, reject) => {
        const acc: string[] = [];
        const stream = redis.scanStream({ match: 'demo:scan:item:*', count: 5 });
        stream.on('data', (keys: string[]) => acc.push(...keys));
        stream.on('end', () => resolve(acc));
        stream.on('error', reject);
    });
    console.log('scanStream 数量 =', streamed.length);

    // 批量删除：分批 unlink，别一次删太多
    if (streamed.length > 0) {
        console.log('批量删除        =', await redis.unlink(...streamed));
    }
}

if (require.main === module) {
    void runDemo('SCAN 遍历', scanDemo);
}
