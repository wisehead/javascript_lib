// 使用 infer 推导函数的返回类型
// 如果 T 是函数类型，返回推断出的返回类型 R，否则返回 never
type ReturnType43<T> = T extends (...args: any[]) => infer R ? R : never;

// 定义一个返回用户对象的函数
function getUser43() {
    return { name: "Alice" };
}

// 定义一个返回数字的函数
function getNumber43() {
    return 42;
}

// 使用 ReturnType 获取函数返回类型
// 推导为 { name: string }
type R1 = ReturnType43<typeof getUser43>;
// 推导为 number
type R2 = ReturnType43<typeof getNumber43>;

// 使用推导出的类型
var r1: R1 = { name: "Bob" };
var r2: R2 = 100;

console.log("用户: " + JSON.stringify(r1));
console.log("数字: " + r2);