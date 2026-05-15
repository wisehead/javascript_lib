// 1、string 字符串
let message: string = "Hello, TypeScript!";

// 模板字符串：TypeScript 支持 模板字符串，用反引号 `（记住不是单引号 '）来定义，允许在字符串中插入变量或表达式，非常适合多行文本和拼接变量。
let myname: string = "Alice";
let greeting: string = `Hello, ${myname}! Welcome to TypeScript.`;
console.log(greeting); // 输出：Hello, Alice! Welcome to TypeScript.

//2.number
let age: number = 25;
let temperature: number = 36.5;

//3、boolean 布尔值
// 表示逻辑值 true 或 false，用于条件判断。

let isCompleted: boolean = false;