// 定义完整的用户接口
interface User3 {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户邮箱
    email: string;
    // 用户密码
    password: string;
}

// Pick：选择指定的属性组成新类型
// 从 User3 中选择 id 和 name 属性
type UserBasicInfo = Pick<User3, "id" | "name">;

// 使用选择后的类型
var user6: UserBasicInfo = { id: 1, name: "Alice" };

console.log("用户基本信息: " + JSON.stringify(user6));