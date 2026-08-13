export {};

// # TypeScript number → string
// ## 1. `toString()` 最常用
const num: number = 123;
const s: string = num.toString(); // "123"

const num2 = 0.567;
num2.toString(); // "0.567"

// > 注意：`null/undefined`不能调用，数字字面量直接写 `123.toString()` 会语法报错，加括号：`(123).toString()`

// ## 2. `String()` 全局函数（推荐，安全）
String(123);     // "123"
String(0.001);   // "0.001"
String(NaN);     // "NaN"
String(Infinity);// "Infinity"

// 优点：可以处理`NaN、Infinity`，不会报错。

// ## 3. 模板字符串 `${num}`
const n = 456;
const str = `${n}`; // "456"

// 开发中最简洁，日常业务首选。

// ## 4. 拼接空字符串（旧JS写法）
const str2 = 789 + ''; // "789"

// ---

// ### 带小数控制（保留N位）
const num3 = 3.14159;
num3.toFixed(2); // "3.14" 返回string，会四舍五入

// ### 对比总结
// |方式|优点|备注|
// |---|---|---|
// |`num.toString()`|标准|不能对`NaN?num`直接调用|
// |`String(num)`|安全兼容|处理NaN/Infinity|
// |`${num}`|代码最短|业务代码最常用|
// |`toFixed(n)`|格式化小数|返回字符串，会四舍五入|

// ### 边界案例
String(NaN);      // "NaN"
String(Infinity); // "Infinity"
(-0).toString();  // "0"

// 需要我顺便写一个安全转换工具函数吗？
