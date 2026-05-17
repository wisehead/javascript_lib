// 创建三个 Promise，其中一个会失败
var ap1 = Promise.resolve("成功");
var ap2 = Promise.reject(new Error("失败"));
var ap3 = Promise.resolve("完成");

// Promise.allSettled 等待所有 Promise 结束
// 返回每个 Promise 的状态和值/reason
Promise.allSettled([ap1, ap2, ap3]).then(function(results) {
    results.forEach(function(result, index) {
        if (result.status === "fulfilled") {
            console.log("Promise " + index + ": " + result.value);
        } else {
            console.log("Promise " + index + ": " + result.reason.message);
        }
    });
});