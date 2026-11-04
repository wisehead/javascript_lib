import Redis, { RedisOptions } from 'ioredis';

/**
 * 连接配置：可用环境变量覆盖，方便切换到本地 redis。
 */
export const redisOptions: RedisOptions = {
    host: process.env.REDIS_HOST ?? '10.27.77.146',
    port: Number(process.env.REDIS_PORT ?? 6380),
    password: process.env.REDIS_PASSWORD ?? 'difyai123456',
    db: Number(process.env.REDIS_DB ?? 0),
    // 连接失败时最多重试 3 次，避免示例脚本一直挂着
    maxRetriesPerRequest: 3,
    retryStrategy: (times: number) => (times > 3 ? null : Math.min(times * 200, 1000)),
};

/** 每次调用创建一个新连接（pub/sub 场景需要独立连接）。 */
export function createClient(): Redis {
    return new Redis(redisOptions);
}

/** 示例脚本共用的默认连接。 */
export const redis: Redis = createClient();

/**
 * 示例入口的统一包装：跑完自动关闭连接，出错时以非 0 退出码结束。
 */
export async function runDemo(name: string, fn: (client: Redis) => Promise<void>): Promise<void> {
    console.log(`\n===== ${name} =====`);
    try {
        await fn(redis);
    } catch (err) {
        console.error(`[${name}] 执行失败:`, err);
        process.exitCode = 1;
    } finally {
        await redis.quit();
    }
}
