const util = require('util');
// 旧的回调风格代码
function oldStyleFunc(param, callback) {
  // 一些异步操作
  setTimeout(() => {
    callback(null, `Result for ${param}`);
  }, 100);
}

// 转换为 Promise 风格
const newStyleFunc = util.promisify(oldStyleFunc);

async function useNewStyle() {
  const result = await newStyleFunc('test');
  console.log(result); // Result for test
}

useNewStyle();