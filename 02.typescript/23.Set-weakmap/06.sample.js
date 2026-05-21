"use strict";
// 使用 Map 统计数组中每个元素的出现次数
function countElements(arr) {
    // 创建 Map，键是字符串，值是数字
    var counts = new Map();
    // 遍历数组
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        // 获取当前计数，如果没有则返回 0
        var currentCount = counts.get(item) || 0;
        // 更新计数
        counts.set(item, currentCount + 1);
    }
    return counts;
}
// 测试
var fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
var result = countElements(fruits);
// 遍历结果
result.forEach(function (count, fruit) {
    console.log(fruit + ": " + count);
});
