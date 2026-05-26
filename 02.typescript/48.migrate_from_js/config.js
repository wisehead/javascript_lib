// 全局配置对象的实际实现
global.GLOBAL_CONFIG = {
    apiUrl: "https://api.example.com",
    version: "1.0.0"
};

// 全局函数的实际实现
global.myFunction = function(param) {
    console.log("myFunction called with param:", param);
};

// 命名空间的实际实现
global.MyNamespace = {
    doSomething: function() {
        console.log("MyNamespace.doSomething called");
    }
};