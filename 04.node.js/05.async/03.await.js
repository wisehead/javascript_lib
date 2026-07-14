const fs = require('fs').promises;

async function readFile() {
  try {
    const data = await fs.readFile('example.txt', 'utf8');
    console.log('文件内容:', data);
  } catch (err) {
    console.error('读取文件出错:', err);
  }
}

readFile();
console.log('读取文件请求已发送，继续执行其他代码...');