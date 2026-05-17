// 声明变量并初始化时，TypeScript 自动推断类型
// 初始值为数字 10，类型推断为 number
var num = 10;

// 初始值为字符串，类型推断为 string
var str = "hello";

// 初始值为布尔值，类型推断为 boolean
var isActive = true;

// 使用 typeof 验证推断结果
console.log("num 类型: " + typeof num);
console.log("str 类型: " + typeof str);
console.log("isActive 类型: " + typeof isActive);