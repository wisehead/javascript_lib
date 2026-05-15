// 定义处理器对象
var handler = {
    // 处理器名称
    name: "Handler",
    // 数字数组
    numbers: [1, 2, 3],

    // 处理方法
    processAll: function() {
        // 使用箭头函数的回调
        // 箭头函数捕获外层的 this，所以可以正确访问 this.name
        this.numbers.forEach((n) => {
            console.log(this.name + ": " + n);
        });
    }
};

// 调用处理方法
handler.processAll();