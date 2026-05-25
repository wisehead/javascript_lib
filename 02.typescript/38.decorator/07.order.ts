// 多个装饰器叠加使用
function first() {
    console.log("first 装饰器");
    return function (target: any) {
        console.log("first 装饰器函数");
    };
}

function second() {
    console.log("second 装饰器");
    return function (target: any) {
        console.log("second 装饰器函数");
    };
}

@first()
@second()
class MyClass {
    name: string;

    constructor() {
        this.name = "";
    }
}

var obj = new MyClass();
