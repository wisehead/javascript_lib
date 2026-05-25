// 定义角色类型
type Role = "admin" | "user" | "guest";

// Record：构造对象类型
// 键为 Role 类型，值为字符串数组类型
type RolePermissions = Record<Role, string[]>;

// 使用 Record 创建权限映射
var permissions: RolePermissions = {
    // 管理员拥有所有权限
    admin: ["read", "write", "delete"],
    // 普通用户拥有读写权限
    user: ["read", "write"],
    // 访客只有读权限
    guest: ["read"]
};

console.log("管理员权限: " + permissions.admin);
console.log("访客权限: " + permissions.guest);