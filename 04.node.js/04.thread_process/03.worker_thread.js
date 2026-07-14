const { Worker } = require('worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', (msg) => {
    console.log('收到消息:', msg);
    parentPort.postMessage('消息已收到');
  });
`, { eval: true });

worker.on('message', (msg) => {
  console.log('来自工作线程的回复:', msg);
});

worker.postMessage('主线程消息');