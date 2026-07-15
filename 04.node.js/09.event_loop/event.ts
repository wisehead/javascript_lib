import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

// 注册事件处理器
myEmitter.on('greet', (): void => {
  console.log('Hello, world!');
});

// 触发事件
myEmitter.emit('greet');
