// 定义数字字面量类型
// code 只能是三个特定值之一
var code: 200 | 404 | 500;

// 正确：赋值 200
code = 200;

// 错误：赋值不在列表中的值
// code = 301; // 编译错误！

console.log("状态码: " + code);

// 使用数字字面量模拟枚举
// 定义一周的天数
type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

// 只能赋值 1-7 之间的数字
var today: Weekday = 1;
console.log("今天是星期: " + today);