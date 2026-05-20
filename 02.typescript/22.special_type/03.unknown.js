"use strict";
// unknown 接受任意类型
// 这是"安全的" any
var value = "hello";
value = 42;
value = true;
// 未知类型不能直接赋值给其他类型
// 如果取消注释下一行，编译器会报错
// var str: string = value;
// 需要进行类型检查后，才能赋值
if (typeof value === "string") {
    // TypeScript 知道 value 是 string 类型
    var str = value;
    console.log("字符串长度: " + str.length);
}
