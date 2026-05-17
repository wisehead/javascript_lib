// async 函数自动返回 Promise
async function greet(): Promise<string> {
    return "Hello, World!";
}

greet().then(function(result) {
    console.log("结果: " + result);
});

// 异步函数返回 Promise
async function getData() {
    return { name: "Alice", age: 25 };
}

getData().then(function(data) {
    console.log("数据: " + JSON.stringify(data));
});