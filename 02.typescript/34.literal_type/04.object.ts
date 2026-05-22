// 定义对象字面量类型
// 指定对象的结构和属性类型
type Point = {
    // 点的 x 坐标
    x: number;
    // 点的 y 坐标
    y: number;
};

// 使用对象字面量类型
var p: Point = { x: 10, y: 20 };
console.log("点: " + JSON.stringify(p));

// 定义只读对象类型
// 使用 readonly 修饰符将属性设为只读
type ReadonlyPoint = {
    // 只读的 x 坐标
    readonly x: number;
    // 只读的 y 坐标
    readonly y: number;
};

// 使用只读对象类型
var rp: ReadonlyPoint = { x: 1, y: 2 };

// 尝试修改只读属性会报错
// rp.x = 3; // 编译错误：只读属性不能修改

console.log("只读点: " + JSON.stringify(rp));