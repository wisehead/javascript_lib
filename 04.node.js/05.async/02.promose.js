const fs = require('fs').promises;

// 使用 Promise 读取文件
fs.readFile('example.txt', 'utf8')
  .then(data => {
    console.log('文件内容:', data);
  })
  .catch(err => {
    console.error('读取文件出错:', err);
  });

console.log('读取文件请求已发送，继续执行其他代码...');