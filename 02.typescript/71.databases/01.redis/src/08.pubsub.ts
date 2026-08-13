import Redis from 'ioredis';
import { createClient, runDemo } from './client';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * 发布订阅：订阅连接进入 subscriber 模式后不能再执行普通命令，
 * 所以订阅端必须用独立连接。
 */
export async function pubsubDemo(publisher: Redis): Promise<void> {
    const subscriber = createClient();

    try {
        subscriber.on('message', (channel: string, message: string) => {
            console.log(`收到消息  [${channel}] ${message}`);
        });
        subscriber.on('pmessage', (pattern: string, channel: string, message: string) => {
            console.log(`模式匹配  [${pattern} -> ${channel}] ${message}`);
        });

        await subscriber.subscribe('news:tech');
        await subscriber.psubscribe('news:*'); // 通配订阅

        // 等订阅生效再发布
        await sleep(200);
        console.log('收到者数量      =', await publisher.publish('news:tech', 'TypeScript 5 发布'));
        console.log('收到者数量      =', await publisher.publish('news:sports', '比赛结束'));

        await sleep(500); // 留时间给回调打印
        await subscriber.unsubscribe('news:tech');
        await subscriber.punsubscribe('news:*');
    } finally {
        await subscriber.quit();
    }
}

if (require.main === module) {
    void runDemo('发布订阅', pubsubDemo);
}
