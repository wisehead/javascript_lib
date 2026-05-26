// 提取函数的返回类型
type ReturnType50<T> = T extends (...args: any[]) => infer R ? R : any;

// 测试
function getData() {
    return { id: 1, name: "Alice" };
}
function fetchUser(id: number): Promise<User> {
    return Promise.resolve({ id, name: "Bob" });
}

type R1 = ReturnType50<typeof getData>;  // { id: number; name: string }
type R2 = ReturnType50<typeof fetchUser>; // Promise<User>

// 使用示例
var result: R1 = { id: 1, name: "Test" };
console.log("返回类型: " + JSON.stringify(result));