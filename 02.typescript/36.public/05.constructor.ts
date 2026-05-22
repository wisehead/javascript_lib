// 定义点类
class Point {
    // 在构造函数参数上直接使用修饰符
    // 相当于同时声明属性并赋值
    constructor(
        // public 修饰：创建公开属性 x
        public x: number,
        // public 修饰：创建公开属性 y
        public y: number,
        // private 修饰：创建私有属性 z
        private z: number
    ) {
        // 构造函数体可以为空，属性已自动创建
    }

    // 计算三维度总和
    public sum(): number {
        // 可以在类内部访问所有属性
        return this.x + this.y + this.z;
    }
}

// 创建点实例
var point = new Point(1, 2, 3);

// 公开属性可以从外部访问
console.log("x: " + point.x);
console.log("y: " + point.y);

// 调用方法
console.log("总和: " + point.sum());

// 错误：私有属性不能从外部访问
// console.log(point.z); // 编译错误！