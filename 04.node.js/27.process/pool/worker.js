// pool/worker.js
process.on('message', async (msg) => {
  if (msg.type === 'task') {
    const { id, payload } = msg;
    // 模拟重任务（斐波那契）
    const fib = (n) => (n <= 1 ? n : fib(n-1) + fib(n-2));
    const result = fib(payload.n);
    process.send({ type: 'done', id, result });
  }
});