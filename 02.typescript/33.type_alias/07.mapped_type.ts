// 将本文件转为模块，避免顶层 type 声明进入全局作用域，
// 与 TS 内置的全局 Readonly/Partial 冲突（ts(2300)）。
export {};

// 映射类型：将所有属性变为只读
// Readonly<T> 遍历 T 的所有属性并添加 readonly
type Readonly<T> = { readonly [P in keyof T]: T[P] };

// 映射类型：将所有属性变为可选
// Partial<T> 遍历 T 的所有属性并添加 ?
type Partial<T> = { [P in keyof T]?: T[P] };

// 定义用户接口
interface User {
    name: string;
    age: number;
}

// 使用映射类型别名
var readonlyUser: Readonly<User> = { name: "Alice", age: 25 };
// readonlyUser.name = "Bob"; // 错误：只读属性不能修改

var partialUser: Partial<User> = { name: "Bob" };

console.log("只读用户: " + JSON.stringify(readonlyUser));
console.log("部分用户: " + JSON.stringify(partialUser));