// 定义用户接口
interface User43C {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户密码
    password: string;
    // 用户邮箱
    email: string;
}

// 实现 Omit：排除指定键
// 使用条件类型过滤键
type Omit43C<T, K extends keyof T> = {
    // P 遍历 T 的所有键
    // 如果 P 可以赋值给 K（即在排除列表中），返回 never（不包含）
    // 否则返回 P（保留该键）
    [P in keyof T as P extends K ? never : P]: T[P];
};

// 使用 Omit 排除 password 键
type UserWithoutPassword43C = Omit43C<User43C, "password">;

// 转换后的类型：
// { id: number; name: string; email: string }

// 使用排除 password 后的类型
var user43c: UserWithoutPassword43C = { id: 1, name: "Alice", email: "a@b.com" };

console.log("无密码: " + JSON.stringify(user43c));