const promise1 = new Promise((resolve) => setTimeout(resolve, 500, '第一个'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, '第二个'));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // 输出："第二个"
  });