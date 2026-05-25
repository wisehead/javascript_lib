// 定义用户接口
interface User {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户邮箱
    email: string;
}

// 使用映射类型和条件类型实现 Partial
// 遍历 T 的所有属性，添加可选修饰符 ?
type Partial2<T> = {
    [P in keyof T]?: T[P];
};

// 使用映射类型和条件类型实现 Required
// 遍历 T 的所有属性，移除可选修饰符 -?
type Required2<T> = {
    [P in keyof T]-?: T[P];
};

// 使用 Partial：所有属性变为可选
var partial: Partial2<User> = { name: "Alice" };

// 使用 Required：将 Partial<User> 的属性变为必填
// 需要先有 Partial<User> 类型
type RequiredUser = Required2<Partial2<User>>;
// var required42: RequiredUser = { name: "Bob", id: 1 };

console.log("可选: " + JSON.stringify(partial));
// console.log("必填: " + JSON.stringify(required42));