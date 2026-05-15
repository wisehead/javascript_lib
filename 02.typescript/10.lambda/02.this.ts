// 定义一个接口描述 this 的结构
interface PersonLike {
    name: string;
}

// 使用普通函数
function Person1(this: PersonLike) {
    this.name = "Alice";

    // 普通函数会创建自己的 this
    // 在 setTimeout 回调中，this 指向 window（浏览器）或 undefined（严格模式）
    setTimeout(function (this: PersonLike) {
        console.log("普通函数: " + this.name);  // this.name 为 undefined
    }.bind(this), 100);  // 使用 bind 来绑定正确的 this
}

// 使用箭头函数
function Person2(this: PersonLike) {
    this.name = "Bob";

    // 箭头函数不创建自己的 this
    // 它捕获外层的 this，所以能正确访问到 name
    setTimeout(() => {
        console.log("箭头函数: " + this.name);  // this.name 为 "Bob"
    }, 100);
}

// 测试
new (Person1 as any)();
new (Person2 as any)();
