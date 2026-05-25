// 定义用户接口
interface User {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户邮箱
    email: string;
}

// 实现 Partial 工具类型
// 遍历 T 的所有键，添加可选修饰符 ?
type Partial43<T> = {
    // P 遍历 keyof T 返回的所有键
    // T[P] 获取原类型中对应键的值类型
    [P in keyof T]?: T[P];
};

// 使用 Partial 类型
type PartialUser43 = Partial43<User>;

// PartialUser43 类型等同于：
// { id?: number; name?: string; email?: string }

// 可以只提供部分属性
var user: PartialUser43 = { name: "Alice" };

console.log("部分用户: " + JSON.stringify(user));