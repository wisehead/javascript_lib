class Rectangle {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    area(): number {
        return this.width * this.height;
    }
}

class Circle {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

var shapes = [new Rectangle(4, 5), new Circle(3)];

for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    if (shape instanceof Rectangle) {
        console.log("矩形面积: " + shape.area());
    } else if (shape instanceof Circle) {
        console.log("圆形面积: " + shape.area().toFixed(2));
    }
}