// 定义抽象类 Shape（图形）
abstract class Shape {
    // 抽象方法：只有声明，没有实现
    // 子类必须实现这两个方法
    abstract area(): number;
    abstract perimeter(): number;

    // 具象方法：可以使用抽象方法
    // 这个方法调用了抽象方法，子类继承后可以正常使用
    describe(): void {
        console.log("面积: " + this.area().toFixed(2));
    }
}

// 定义矩形类继承 Shape
class Rectangle extends Shape {
    // 矩形的宽度
    width: number;
    // 矩形的高度
    height: number;

    // 构造函数
    constructor(width: number, height: number) {
        super();  // 调用父类构造函数
        this.width = width;
        this.height = height;
    }

    // 实现抽象方法：计算面积
    area(): number {
        return this.width * this.height;
    }

    // 实现抽象方法：计算周长
    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// 创建矩形实例
var rect = new Rectangle(4, 5);

// 调用继承的 describe 方法，内部会调用子类的 area 方法
rect.describe();
console.log("周长: " + rect.perimeter());