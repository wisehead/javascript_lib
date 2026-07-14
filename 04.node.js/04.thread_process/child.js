// child.js —— 子进程
process.on('message', (msg) => {
  console.log('来自父进程的消息:', msg);
  // 处理后回复父进程
  process.send({ received: msg, reply: 'hello from child' });
});
