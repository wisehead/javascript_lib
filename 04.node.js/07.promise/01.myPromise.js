const myPromise = new Promise((resolve, reject) => {
  // 异步操作
  const success = true; // 假设这是异步操作的结果
  
  if (success) {
    resolve('操作成功！'); // 状态变为 fulfilled
  } else {
    reject('操作失败！'); // 状态变为 rejected
  }
});

myPromise
  .then((result) => {
    console.log(result); // 输出："操作成功！"
  })
  .catch((error) => {
    console.error(error); // 输出："操作失败！"
  });