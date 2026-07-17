const fs = require('fs');

// ============================================================
// 回调地狱（Callback Hell）示例
// 需求：依次读取 3 个文件，前一个读完才能读下一个，
//      最后把三者内容拼接起来，任何一步出错都要处理。
// ============================================================

// -------- 反面示例：回调地狱 --------
fs.readFile('./a.txt', 'utf8', (err, dataA) => {
  if (err) {
    console.error('读取 a.txt 失败:', err);
  } else {
    fs.readFile('./b.txt', 'utf8', (err, dataB) => {
      if (err) {
        console.error('读取 b.txt 失败:', err);
      } else {
        fs.readFile('./c.txt', 'utf8', (err, dataC) => {
          if (err) {
            console.error('读取 c.txt 失败:', err);
          } else {
            // 层层缩进，代码向右不断偏移，形成“金字塔”/“厄运回旋镖”
            const result = dataA + dataB + dataC;
            console.log('拼接结果:', result);
          }
        });
      }
    });
  }
});

// ============================================================
// 对比：用 Promise + async/await 改写，摆脱回调地狱
// ============================================================

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

async function readAll() {
  try {
    const dataA = await readFilePromise('./a.txt');
    const dataB = await readFilePromise('./b.txt');
    const dataC = await readFilePromise('./c.txt');
    console.log('拼接结果:', dataA + dataB + dataC);
  } catch (err) {
    console.error('读取失败:', err);
  }
}

readAll();
