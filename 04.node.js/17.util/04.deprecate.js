const util = require('util');

const oldFunction = util.deprecate(() => {
  console.log('This function is deprecated');
}, 'oldFunction is deprecated. Use newFunction instead.');

oldFunction();  // 调用时会显示警告