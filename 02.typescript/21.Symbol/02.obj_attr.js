"use strict";
// 创建 Symbol 作为属性键
var sym = Symbol("key");
// 使用 Symbol 作为对象的属性键
var obj = {
    name: "Alice", // 普通字符串属性
    [sym]: "secret value" // Symbol 属性，计算属性名
};
// 访问普通属性
console.log("普通属性: " + obj.name);
// 访问 Symbol 属性
console.log("Symbol 属性: " + obj[sym]);
// Symbol 属性不会出现在 JSON 中
console.log("对象: " + JSON.stringify(obj));
