"use strict";
// 创建 Set，指定元素类型为 number
var numbers = new Set();
// 添加元素
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(1); // 重复值会被忽略，不会添加
// 检查大小和包含
console.log("Set 大小: " + numbers.size);
console.log("是否包含 2: " + numbers.has(2));
// 遍历 Set
numbers.forEach(function (value) {
    console.log("值: " + value);
});
// 转换为数组
var arr = Array.from(numbers);
console.log("转换为数组: " + arr);
