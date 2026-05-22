"use strict";
// 文件路径：CalcTest.ts
// 三斜线指令：告诉 TypeScript 编译器引入声明文件
/// <reference path = "Calc.d.ts" />
// 创建 Calc 实例，TypeScript 现在能正确识别 obj 的类型
var obj = new Runoob.Calc();
// obj.doSum("Hello"); // 编译错误！"Hello" 是字符串，而 doSum 要求传入 number
console.log(obj.doSum(10)); // 正确调用：传入 10，期望得到 55
