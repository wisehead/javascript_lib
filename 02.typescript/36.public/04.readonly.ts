// 定义用户类
class User {
    // 使用 readonly 修饰的属性只能在初始化时赋值
    // 用户 ID
    readonly id: number;
    // 用户名
    readonly name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// 创建用户实例
var user = new User(1, "Alice");

console.log("用户: " + user.id + ", " + user.name);

// 错误：不能修改 readonly 属性
// user.id = 2; // 编译错误！
// user.name = "Bob"; // 编译错误！