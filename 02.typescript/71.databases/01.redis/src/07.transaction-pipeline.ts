import Redis from 'ioredis';
import { runDemo } from './client';

/**
 * Pipeline：把多条命令一次发出去，省 RTT，但不保证原子。
 * MULTI/EXEC：事务，命令一起执行；配合 WATCH 实现乐观锁。
 */
export async function transactionDemo(redis: Redis): Promise<void> {
    await redis.del('demo:tx:a', 'demo:tx:b', 'demo:tx:stock');

    // pipeline：结果是 [错误, 值] 的二元组数组
    const pipelineResult = await redis
        .pipeline()
        .set('demo:tx:a', '1')
        .incr('demo:tx:a')
        .set('demo:tx:b', 'hello')
        .get('demo:tx:b')
        .exec();
    console.log('pipeline 结果   =', pipelineResult);

    // multi：整体排队后一起执行
    const txResult = await redis.multi().incr('demo:tx:a').incrby('demo:tx:a', 5).get('demo:tx:a').exec();
    console.log('multi 结果      =', txResult);

    // WATCH 乐观锁：扣库存。被 watch 的 key 在 EXEC 前被改动，exec() 返回 null
    await redis.set('demo:tx:stock', '10');
    await redis.watch('demo:tx:stock');
    const stock = Number(await redis.get('demo:tx:stock'));
    if (stock <= 0) {
        await redis.unwatch();
        console.log('库存不足，放弃');
        return;
    }
    const decrResult = await redis.multi().decr('demo:tx:stock').exec();
    console.log(
        decrResult === null ? 'WATCH 命中冲突，需重试' : `扣减成功，剩余 = ${decrResult[0][1]}`
    );

    // 模拟冲突：watch 之后被别的连接改掉
    await redis.watch('demo:tx:stock');
    const other = new Redis(redis.options);
    await other.set('demo:tx:stock', '99');
    await other.quit();
    const conflict = await redis.multi().decr('demo:tx:stock').exec();
    console.log('冲突场景 exec() =', conflict, '(null 表示事务被打断)');

    await redis.expire('demo:tx:stock', 300);
}

if (require.main === module) {
    void runDemo('事务与 Pipeline', transactionDemo);
}
