// 定义用户接口，包含必填属性
interface User {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户邮箱
    email: string;
}

// Partial：将所有属性变为可选
// 转换后的类型所有属性都是可选的
type PartialUser = Partial<User>;

// 使用 PartialUser 类型
// 可以只提供部分属性，不需要全部提供
var user: PartialUser = { name: "Alice" };

console.log("部分用户: " + JSON.stringify(user));