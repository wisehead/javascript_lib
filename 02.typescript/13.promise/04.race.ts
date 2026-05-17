// 创建三个不同延迟的 Promise
var np1 = new Promise(function(resolve) {
    setTimeout(function() { resolve("p1"); }, 100);
});
var np2 = new Promise(function(resolve) {
    setTimeout(function() { resolve("p2"); }, 50);
});
var np3 = new Promise(function(resolve) {
    setTimeout(function() { resolve("p3"); }, 30);
});

// Promise.race 返回最先完成的 Promise 的结果
Promise.race([np1, np2, np3]).then(function(value) {
    console.log("最先完成: " + value);
});