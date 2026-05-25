// 定义一个用户对象，包含姓名和 greet 方法
var user2: { name: string; greet(): string; [key: string]: any } = {
    name: "Alice",
    // 定义一个打招呼方法
    greet: function() {
        return "Hello, " + this.name;
    }
};

// 安全调用存在的方法
// user2.greet 存在，正常调用并返回结果
var message1 = user2.greet?.();

// 安全调用不存在的方法
// user2.sayHello 不存在，返回 undefined 而不报错
var message2 = user2.sayHello?.();

console.log("greet: " + message1);
console.log("sayHello: " + message2);
