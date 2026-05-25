// 定义方法装饰器工厂
// 返回一个装饰器函数
function enumerable(value: boolean) {
    // 返回装饰器函数，接收三个参数
    return function (
        target: any,           // 所属类的原型对象
        propertyKey: string,    // 方法名称
        descriptor: PropertyDescriptor // 属性描述符
    ) {
        // 修改属性的 enumerable 特性
        // false 表示该方法不可遍历
        descriptor.enumerable = value;
    };
}

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    // 应用装饰器，设置该方法为不可枚举
    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

var g = new Greeter("World");

// 检查 greet 方法是否可枚举
console.log("方法可枚举: " + g.propertyIsEnumerable("greet"));

// 遍历对象的属性
for (var key in g) {
    console.log("属性: " + key);
}