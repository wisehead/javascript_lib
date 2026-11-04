# Redis 常用操作（TypeScript + ioredis）

## 运行

```bash
npm install
npm start          # 依次跑完全部示例
npm run string     # 单独跑某一类，见 package.json 的 scripts
```

连接配置在 [src/client.ts](src/client.ts)，默认连 `10.27.77.146:6380`，可用环境变量覆盖：

```bash
REDIS_HOST=127.0.0.1 REDIS_PORT=6379 REDIS_PASSWORD=xxx npm start
```

## 文件说明

| 文件 | 内容 |
| --- | --- |
| [src/client.ts](src/client.ts) | 连接配置、示例入口包装 |
| [src/01.string.ts](src/01.string.ts) | SET/GET、SET NX EX、INCR 计数器、MSET/MGET、JSON 对象缓存 |
| [src/02.hash.ts](src/02.hash.ts) | HSET/HGETALL、HINCRBY、HSETNX、HSCAN |
| [src/03.list.ts](src/03.list.ts) | LPUSH/RPOP 队列、LTRIM 保留最近 N 条、BLPOP 阻塞消费 |
| [src/04.set.ts](src/04.set.ts) | SADD、交/并/差集、SRANDMEMBER 抽奖 |
| [src/05.zset.ts](src/05.zset.ts) | 排行榜、ZRANGEBYSCORE、用时间戳做延时队列 |
| [src/06.key-expire.ts](src/06.key-expire.ts) | TTL/EXPIRE/PERSIST、RENAME、DEL vs UNLINK、INFO |
| [src/07.transaction-pipeline.ts](src/07.transaction-pipeline.ts) | pipeline、MULTI/EXEC、WATCH 乐观锁扣库存 |
| [src/08.pubsub.ts](src/08.pubsub.ts) | subscribe / psubscribe / publish |
| [src/09.scan.ts](src/09.scan.ts) | SCAN 游标遍历、scanStream、批量 UNLINK |
| [src/10.lua-lock.ts](src/10.lua-lock.ts) | Lua 脚本、分布式锁、滑动计数限流、defineCommand |

## 几个容易踩的点

- **不要用 KEYS**：O(N) 会阻塞整个实例，用 `SCAN` 分批遍历。
- **删大 key 用 UNLINK**：`DEL` 同步释放内存会卡住主线程。
- **订阅要独立连接**：连接进入 subscriber 模式后不能再发普通命令。
- **`BLPOP` 也要独立连接**：阻塞期间该连接上的其他命令都排队等着。
- **解锁必须校验 owner**：直接 `DEL` 可能删掉别人在锁超时后新拿到的锁，所以用 Lua 保证「比较 + 删除」原子。
- **WATCH 冲突时 `exec()` 返回 `null`**，不是抛异常，必须显式判断并重试。
- **pipeline 不是事务**：只是省 RTT，中间某条失败其他照样执行；需要原子性用 `MULTI` 或 Lua。
