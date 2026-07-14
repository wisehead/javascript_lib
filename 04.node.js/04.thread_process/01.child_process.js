const { fork } = require('child_process');
const child = fork('child.js');

child.on('message', (msg) => {
  console.log('来自子进程的消息:', msg);
});

child.send({ hello: 'world' });