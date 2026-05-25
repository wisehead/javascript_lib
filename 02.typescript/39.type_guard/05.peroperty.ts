// 定义圆形接口，使用 kind 属性作为标识
interface Circle {
    kind: "circle";       // 标识字段：值为 "circle"
    radius: number;       // 半径
}

// 定义矩形接口
interface Rectangle {
    kind: "rectangle";    // 标识字段：值为 "rectangle"
    width: number;        // 宽度
    height: number;      // 高度
}

// 定义三角形接口
interface Triangle {
    kind: "triangle";    // 标识字段：值为 "triangle"
    base: number;        // 底边
    height: number;      // 高度
}

// 定义联合类型
type Shape = Circle | Rectangle | Triangle;

// 计算面积的函数
function getArea(shape: Shape): number {
    // 使用 switch 语句进行类型守卫
    // 根据 kind 属性的值，TypeScript 会自动缩小类型
    switch (shape.kind) {
        case "circle":
            // shape 被缩小为 Circle 类型
            // 可以访问 radius 属性
            return Math.PI * shape.radius ** 2;

        case "rectangle":
            // shape 被缩小为 Rectangle 类型
            // 可以访问 width 和 height 属性
            return shape.width * shape.height;

        case "triangle":
            // shape 被缩小为 Triangle 类型
            return 0.5 * shape.base * shape.height;
    }
}

// 测试调用
var circle = { kind: "circle" as const, radius: 5 };
var rectangle = { kind: "rectangle" as const, width: 4, height: 6 };
var triangle = { kind: "triangle" as const, base: 3, height: 4 };

console.log("圆形面积: " + getArea(circle).toFixed(2));
console.log("矩形面积: " + getArea(rectangle));
console.log("三角形面积: " + getArea(triangle));