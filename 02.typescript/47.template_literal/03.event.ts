// 构建事件名类型
// `on${Capitalize<string>}` 生成以 "on" 开头，首字母大写的字符串
type EventName = `on${Capitalize<string>}`;
// `handle${Capitalize<string>}` 生成以 "handle" 开头，首字母大写的字符串
type Handler = `handle${Capitalize<string>}`;

// 只能赋值符合格式的字符串
var clickEvent: EventName = "onClick";
var focusEvent: EventName = "onFocus";
var handler: Handler = "handleSubmit";

console.log("事件: " + clickEvent);
console.log("处理器: " + handler);