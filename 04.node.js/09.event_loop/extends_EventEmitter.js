class MyEmitter extends EventEmitter {}
const customEmitter = new MyEmitter();

customEmitter.on('customEvent', () => {
  console.log('Custom event fired');
});

customEmitter.emit('customEvent');