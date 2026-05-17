// 创建 Promise，使用泛型指定解决值的类型
// Promise<string> 表示成功时返回字符串
var promise = new Promise<string>(function(resolve, reject) {
    var success = true;
    if (success) {
        // 调用 resolve 表示操作成功，传入结果值
        resolve("成功!");
    } else {
        // 调用 reject 表示操作失败，传入错误
        reject(new Error("失败"));
    }
});

// 使用 then 处理成功情况
promise.then(function(value) {
    console.log("完成: " + value);
})["catch"](function(error) {
    // 使用 catch 处理失败情况
    console.log("错误: " + error.message);
});