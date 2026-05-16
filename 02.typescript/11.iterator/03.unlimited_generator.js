"use strict";
// 无限数字生成器
// 每次调用只生成一个数字，不会一次性生成所有数字
function* infiniteNumbers() {
    var n = 1;
    while (true) { // 无限循环
        yield n++; // 暂停并返回当前值，然后递增
    }
}
var gen3 = infiniteNumbers();
console.log("第1个: " + gen3.next().value);
console.log("第2个: " + gen3.next().value);
console.log("第3个: " + gen3.next().value);
// 只获取前5个数字
var nums = [];
var iter = infiniteNumbers();
for (var i = 0; i < 5; i++) {
    nums.push(iter.next().value);
}
console.log("前5个: " + nums);
