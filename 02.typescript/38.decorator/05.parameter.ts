// 参数装饰器
// 用于记录参数信息或进行验证
function logParameter(
    target: any,               // 类的原型对象
    propertyKey: string,       // 方法名称
    parameterIndex: number    // 参数在函数中的索引位置（从 0 开始）
) {
    console.log("参数装饰器: " + propertyKey +
        " 第 " + (parameterIndex + 1) + " 个参数");
}

class Greeter2 {
    greeting: string;

    constructor(greeting: string) {
        this.greeting = greeting;
    }

    // 在参数前使用 @ 语法应用装饰器
    greet(@logParameter name: string) {
        return this.greeting + ", " + name;
    }
}

var greeter = new Greeter2("Hello");
greeter.greet("RUNOOB");