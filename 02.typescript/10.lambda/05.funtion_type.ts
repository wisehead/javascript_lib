// 直接定义箭头函数类型
// (a: number, b: number) => number 表示接受两个 number 参数，返回 number
var add2: (a: number, b: number) => number = (a, b) => a + b;

// 使用接口定义箭头函数类型
// 这种方式更适合在接口或类型别名中复用
interface MathOperation {
    // 定义函数签名
    (a: number, b: number): number;
}

// 使用接口类型
var multiply: MathOperation = (a, b) => a * b;

console.log("加法: " + add(2, 3));
console.log("乘法: " + multiply(4, 5));