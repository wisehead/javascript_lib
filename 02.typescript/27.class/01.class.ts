// 定义 Car 类
class Car {
    // 字段：描述汽车的属性
    engine: string;

    // 构造函数：在创建对象时初始化 engine
    constructor(engine: string) {
        this.engine = engine;
    }

    // 方法：显示发动机信息
    disp(): void {
        console.log("发动机型号: " + this.engine);
    }
}

// 创建类的实例
var car = new Car("V8 发动机");

// 访问字段
console.log("读取发动机: " + car.engine);

// 调用方法
car.disp();