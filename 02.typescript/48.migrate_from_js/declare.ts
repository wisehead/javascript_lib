// 定义全局变量和函数的实际实现
const GLOBAL_CONFIG = {
    apiUrl: "https://api.example.com",
    version: "1.0.0"
};

function myFunction(param: string): void {
    console.log("myFunction called with param:", param);
}

namespace MyNamespace {
    export function doSomething(): void {
        console.log("MyNamespace.doSomething called");
    }
}

// 使用
console.log(GLOBAL_CONFIG.apiUrl);
myFunction("hello");
MyNamespace.doSomething();
