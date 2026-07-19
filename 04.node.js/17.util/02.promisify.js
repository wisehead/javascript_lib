const util = require('util');
const fs = require('fs');

// 将回调风格的 fs.readFile 转换为返回 Promise 的函数
const readFileAsync = util.promisify(fs.readFile);

(async () => {
  try {
    const data = await readFileAsync('example.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();