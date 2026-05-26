// 定义用户类型
interface User51 {
    id: number;       // 用户ID
    name: string;     // 用户名
    email: string;    // 邮箱
    age?: number;     // 年龄（可选）
}

// 使用 keyof 获取所有键的联合类型
// 结果: "id" | "name" | "email" | "age"
type UserKeys = keyof User51;

// 测试 keyof
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user51: User51 = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

// 获取 name 属性
const userName: string = getProperty(user51, "name");
console.log("用户名: " + userName);