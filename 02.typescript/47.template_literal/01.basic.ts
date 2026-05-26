// 定义基础字符串字面量类型
type World = "world";

// 使用模板字面量类型
// `Hello ${World}` 相当于 "Hello world"
type Greeting = `Hello ${World}`;

// 只能赋值符合类型定义的字符串
var greeting: Greeting = "Hello world";
console.log("问候: " + greeting);