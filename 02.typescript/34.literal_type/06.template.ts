// 使用模板字面量类型定义事件名称
// `on${string}` 表示以 "on" 开头的任意字符串
type EventName = `on${string}`;

// 使用模板字面量类型定义处理器名称
// Capitalize 将字符串首字母大写
type Handler = `handle${Capitalize<string>}`;

// 使用模板字面量类型
var event1: EventName = "onClick";
var handler1: Handler = "handleSubmit";

console.log("事件: " + event1);
console.log("处理器: " + handler1);

// 错误：不符合模板格式
// var e: EventName = "click"; // 编译错误：不是以 "on" 开头