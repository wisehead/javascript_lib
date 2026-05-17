// 声明变量时不赋值，也没有初始值
// TypeScript 无法推断类型，会推断为 any
var unknown;

// 可以赋任何类型的值
unknown = "hello";
unknown = 123;

// 这种行为容易导致类型错误
console.log("未指定类型: " + unknown);

// 建议：显式指定类型以获得更好的类型安全
var fixedNumber: number = 42;

console.log("指定类型: " + fixedNumber);