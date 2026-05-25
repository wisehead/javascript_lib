// 定义一个类装饰器函数
// 参数 target 就是被装饰的类构造函数
function sealed(target: Function) {
    // 打印装饰器被应用到的类名
    console.log("装饰器 applied to: " + target.name);

    // 使用 Object.seal 锁定构造函数和原型
    // 防止在运行时添加或删除属性
    Object.seal(target);
    Object.seal(target.prototype);
}

// 使用 @ 语法将装饰器应用到类上
@sealed
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 创建实例测试
var person = new Person("RUNOOB");
console.log("创建: " + person.name);

// 尝试添加新属性（会被阻止，因为类被 seal 了）
// person.age = 25; // 静默失败