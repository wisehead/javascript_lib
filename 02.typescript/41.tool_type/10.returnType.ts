// 定义获取用户的函数
function getUser() {
    return { name: "Alice", age: 25 };
}

// 定义获取配置的函数
function getConfig() {
    return { host: "localhost", port: 8080 };
}

// ReturnType：获取函数的返回类型
// 提取 getUser 函数的返回类型
type UserType = ReturnType<typeof getUser>;
// 提取 getConfig 函数的返回类型
type ConfigType = ReturnType<typeof getConfig>;

// 使用提取的返回类型创建对象
var user8: UserType = { name: "Bob", age: 30 };
var config8: ConfigType = { host: "example.com", port: 3000 };

console.log("用户: " + JSON.stringify(user8));
console.log("配置: " + JSON.stringify(config8));