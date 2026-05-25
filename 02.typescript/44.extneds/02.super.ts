class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    describe(): string {
        return "这是一个 " + this.color + " 的图形";
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    // 重写父类方法
    describe(): string {
        // 调用父类方法并扩展
        return super.describe() + "，半径是 " + this.radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

var circle = new Circle("红色", 5);
console.log(circle.describe());
console.log("面积: " + circle.area().toFixed(2));

export {};