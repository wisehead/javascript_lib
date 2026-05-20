"use strict";
// 创建 Symbol，传入描述字符串（可选）
var sym1 = Symbol("description");
var sym2 = Symbol("description");
// 每次创建的 Symbol 都是唯一的，即使描述相同
console.log("sym1 === sym2: " + (sym1 === sym2));
console.log("sym1: " + sym1.toString());
console.log("sym2: " + sym2.toString());
