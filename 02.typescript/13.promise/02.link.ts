// 链式调用：每个 then 返回新的值，被下一个 then 接收
var promise1 = Promise.resolve(1)
    .then(function(n) {
        // 第一个 then，n = 1
        return n * 2;  // 返回 2
    })
    .then(function(n) {
        // 第二个 then，n = 2
        return n + 10;  // 返回 12
    })
    .then(function(n) {
        // 第三个 then，n = 12
        console.log("最终结果: " + n);
        return n;
    });

console.log("Promise 链: " + promise);