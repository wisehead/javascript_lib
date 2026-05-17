// 创建三个 Promise
var p1 = Promise.resolve(1);
var p2 = Promise.resolve(2);
var p3 = Promise.resolve(3);

// Promise.all 等待所有 Promise 完成
// 返回一个数组，包含所有 Promise 的结果
Promise.all([p1, p2, p3]).then(function(results) {
    console.log("全部完成: " + results);
    // 计算总和
    console.log("总和: " + results.reduce(function(a, b) { return a + b; }, 0));
});