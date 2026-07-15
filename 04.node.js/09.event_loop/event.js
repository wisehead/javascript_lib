const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// 注册事件处理器
myEmitter.on('greet', () => {
  console.log('Hello, world!');
});

// 触发事件
myEmitter.emit('greet');