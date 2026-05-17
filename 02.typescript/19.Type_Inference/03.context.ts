// 定义数字数组
var numbers = [1, 2, 3, 4, 5];

// 使用 map 方法
// 回调函数的参数 n 的类型会根据 numbers 数组的元素类型自动推断为 number
var doubled = numbers.map(function(n) {
    // n 自动推断为 number 类型
    return n * 2;
});

console.log("翻倍数组: " + doubled);