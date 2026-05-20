"use strict";
// 计算形状面积
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        default:
            // default 分支应该处理所有未预料到的情况
            // 如果添加新的 Shape 类型但忘记处理，编译器会报错
            var _exhaustive = shape;
            return _exhaustive;
    }
}
var circle = { kind: "circle", radius: 5 };
var square = { kind: "square", side: 4 };
console.log("圆形面积: " + area(circle).toFixed(2));
console.log("正方形面积: " + area(square));
