// 条件类型语法：T extends U ? X : Y
// 如果 T 是字符串类型，返回 true，否则返回 false
type IsString<T> = T extends string ? true : false;

// 使用条件类型
// string extends string 为 true，所以 A 类型是 true
type A = IsString<string>;
// number extends string 为 false，所以 B 类型是 false
type B = IsString<number>;

// 使用这些类型
var a: A = true;
var b: B = false;

console.log("string 是字符串?: " + a);
console.log("number 是字符串?: " + b);