// 定义完整的用户接口
interface User7 {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户邮箱
    email: string;
    // 用户密码
    password: string;
}

// Omit：排除指定的属性
// 从 User7 中排除 password 属性
type UserWithoutPassword = Omit<User7, "password">;

// 使用排除后的类型
var user7: UserWithoutPassword = { id: 1, name: "Alice", email: "a@b.com" };

console.log("无密码用户: " + JSON.stringify(user7));