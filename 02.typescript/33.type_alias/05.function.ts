// 函数类型别名：定义回调函数类型
// Callback 接受一个字符串参数，返回 void
type Callback = (result: string) => void;

// 函数类型别名：定义数学运算函数类型
// MathOperation 接受两个数字参数，返回数字
type MathOperation = (a: number, b: number) => number;

// 使用函数类型别名
var add: MathOperation = function(a, b) { return a + b; };
var multiply: MathOperation = function(a, b) { return a * b; };

console.log("加法: " + add(2, 3));
console.log("乘法: " + multiply(4, 5));