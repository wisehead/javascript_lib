const promise1 = Promise.resolve('第一个');
const promise2 = Promise.resolve('第二个');

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results); // 输出：['第一个', '第二个']
  });