// 定义用户接口
interface User43 {
    // 用户名
    name: string;
    // 用户年龄
    age: number;
}

// 使用 readonly 映射：将所有属性变为只读
// 添加 readonly 修饰符
type Readonly43<T> = {
    readonly [P in keyof T]: T[P];
};

// 使用可选映射：将所有属性变为可选（基础版）
type Optional43<T> = {
    [P in keyof T]?: T[P];
};

// 使用 -? 映射：移除可选修饰符（变为必填）
// -? 会移除原有的 ? 修饰符
type Required43<T> = {
    [P in keyof T]-?: T[P];
};

// 测试只读类型
var readonlyUser43: Readonly43<User43> = { name: "Alice", age: 25 };
// readonlyUser43.age = 30; // 错误：只读属性不能修改

// 测试可选类型
var optionalUser43: Optional43<User43> = { name: "Bob" };

console.log("只读: " + JSON.stringify(readonlyUser43));
console.log("可选: " + JSON.stringify(optionalUser43));