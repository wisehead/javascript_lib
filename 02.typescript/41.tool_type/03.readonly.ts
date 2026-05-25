// 定义用户接口
interface User2 {
    // 用户名
    name: string;
    // 用户年龄
    age: number;
}

// Readonly：将所有属性变为只读
// 转换后的类型所有属性都不能修改
type ReadonlyUser = Readonly<User2>;

// 创建只读用户对象
var user5: ReadonlyUser = { name: "Alice", age: 25 };

// 尝试修改只读属性会报错
// user5.name = "Bob"; // 错误：只读属性不能修改

console.log("只读用户: " + JSON.stringify(user5));