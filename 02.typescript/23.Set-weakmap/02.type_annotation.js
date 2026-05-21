"use strict";
// 字符串 Set
// 只能添加字符串类型的值
var stringSet = new Set();
stringSet.add("a");
stringSet.add("b");
// 创建存储 Person 对象的 Set
var personSet = new Set();
personSet.add({ name: "Alice" });
personSet.add({ name: "Bob" });
console.log("字符串 Set: " + Array.from(stringSet));
console.log("对象 Set 大小: " + personSet.size);
