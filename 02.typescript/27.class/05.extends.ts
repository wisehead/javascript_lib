// 父类：形状
class Shape {
    area: number;

    constructor(a: number) {
        this.area = a;
    }
}

// 子类：圆，继承自 Shape
class Circle extends Shape {
    disp(): void {
        console.log("圆的面积: " + this.area);
    }
}

var circle = new Circle(223);
circle.disp();