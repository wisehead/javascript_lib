function asyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('第一步完成'), 1000);
  });
}

function asyncOperation2(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${data}, 第二步完成`), 1000);
  });
}

asyncOperation1()
  .then((result) => asyncOperation2(result))
  .then((finalResult) => {
    console.log(finalResult); // 输出："第一步完成, 第二步完成"
  })
  .catch((error) => {
    console.error('链式中出错:', error);
  });