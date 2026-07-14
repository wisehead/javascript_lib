# worker_threads 详解

这段代码演示了 Node.js 的 `worker_threads` 模块：在主线程之外开一个真正的工作线程，两者通过消息通道双向通信。

核心一句话：`cluster` 是多**进程**（各跑各的内存），`worker_threads` 是多**线程**（同一进程内，可共享内存），专门用来把 **CPU 密集型计算**从主线程卸载出去，避免阻塞事件循环。

---

## 一、逐行解析

```js
const { Worker } = require('worker_threads');
```
从内置模块 `worker_threads` 里取出 `Worker` 类。`Worker` 用来在主线程里创建并管理一个新的工作线程。

```js
const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', (msg) => {
    console.log('收到消息:', msg);
    parentPort.postMessage('消息已收到');
  });
`, { eval: true });
```
创建一个工作线程。

- 第一个参数是**工作线程要执行的代码**。
- 第二个参数 `{ eval: true }` 是关键：告诉 Node "第一个参数是**要直接执行的 JS 源码字符串**，而不是一个文件路径"。
  - 如果不写 `eval: true`，Node 会把字符串当成一个 `.js` 文件的路径去加载，这里就会报找不到文件的错。
  - 更常见的写法是 `new Worker('./task.js')`，把线程逻辑放到单独的文件里。这里用内联字符串只是为了演示方便。

工作线程内部：

- `const { parentPort } = require('worker_threads');`
  在工作线程里，`parentPort` 是与**主线程通信的端口**（父线程一侧对应的就是 `worker` 对象本身）。
- `parentPort.on('message', ...)`
  监听主线程发来的消息。收到后打印，并用 `parentPort.postMessage('消息已收到')` 回复主线程。

```js
worker.on('message', (msg) => {
  console.log('来自工作线程的回复:', msg);
});
```
主线程这边监听 `worker` 发回来的消息（也就是工作线程里 `parentPort.postMessage(...)` 发出的内容）。

```js
worker.postMessage('主线程消息');
```
主线程向工作线程发送一条消息，触发工作线程里那个 `parentPort.on('message', ...)` 回调。

---

## 二、执行流程

```
主线程                                工作线程
  │                                      │
  │  new Worker(...)  ── 创建 ──────────▶ │  启动，注册 parentPort.on('message')
  │                                      │
  │  worker.postMessage('主线程消息') ──▶ │  收到 → 打印"收到消息: 主线程消息"
  │                                      │  parentPort.postMessage('消息已收到')
  │  worker.on('message') ◀──── 回复 ──── │
  │  打印"来自工作线程的回复: 消息已收到"    │
```

预期输出（两条打印顺序可能因线程调度略有先后，但通常如下）：

```
收到消息: 主线程消息
来自工作线程的回复: 消息已收到
```

---

## 三、关键概念

### 1. `postMessage` / `on('message')` 是一对
通信是**异步、双向**的，基于消息传递（Message Passing）：

| 方向 | 发送方 | 接收方 |
|------|--------|--------|
| 主 → 工 | `worker.postMessage(x)` | 工作线程里 `parentPort.on('message')` |
| 工 → 主 | `parentPort.postMessage(y)` | 主线程里 `worker.on('message')` |

### 2. 消息是怎么"传"过去的？——结构化克隆
默认情况下，`postMessage` 传的对象会被**结构化克隆（structured clone）**——即深拷贝一份给对方，两边不是同一个引用。所以在一个线程里改动对象，另一个线程看不到。

如果要传大块数据又不想拷贝，可以用：
- `ArrayBuffer` + transfer list：**转移所有权**（零拷贝，转移后原线程不能再用）。
- `SharedArrayBuffer`：**真正共享内存**，多个线程读写同一块内存（需自己用 `Atomics` 做同步）。这正是 `worker_threads` 相比 `cluster` 的独有能力。

### 3. 什么时候该用 worker_threads？
Node 主线程是单线程的。如果在主线程里跑一个耗时的**同步计算**（如大数组排序、图像/视频处理、加解密、复杂 JSON 解析），会**阻塞事件循环**，导致所有其他请求卡住。

- **CPU 密集型任务** → 用 `worker_threads` 丢到别的线程去算，主线程继续响应。
- **I/O 密集型任务**（读文件、网络请求、查数据库） → **不需要** worker，Node 的异步 I/O 本身就不阻塞主线程。

---

## 四、worker_threads vs cluster vs child_process

| 维度 | worker_threads | cluster | child_process |
|------|----------------|---------|---------------|
| 隔离单位 | 线程（同一进程） | 进程 | 进程 |
| 内存 | 可共享（SharedArrayBuffer） | 完全独立 | 完全独立 |
| 创建开销 | 小 | 大 | 大 |
| 通信 | postMessage（可零拷贝/共享内存） | IPC（消息拷贝） | IPC / stdio |
| 典型场景 | CPU 密集计算 | 多核跑 HTTP 服务、高可用 | 调用外部程序 / 独立子任务 |

一句话区分：
- **cluster**：多进程分摊 HTTP 请求，利用多核 + 容错（见 [cluster.md](cluster.md)）。
- **worker_threads**：单进程内多线程，把重计算搬走，还能共享内存。
- **child_process**：起一个独立子进程去跑任意程序（甚至非 JS）。

---

## 五、可改进的地方

1. **线程用完要回收**：这段示例没有关闭线程，进程不会自动退出。实际中处理完应调用 `worker.terminate()`，或在工作线程里 `process.exit()`。
2. **错误处理**：应监听 `worker.on('error', ...)` 和 `worker.on('exit', code => ...)`，否则线程内异常可能被忽略。
3. **生产写法**：把线程逻辑放进独立文件 `new Worker('./task.js')`，而不是内联字符串 + `eval: true`，更利于维护和调试。
4. **线程池**：频繁创建/销毁线程有开销，高频场景应复用线程（可用 `piscina` 等线程池库）。
