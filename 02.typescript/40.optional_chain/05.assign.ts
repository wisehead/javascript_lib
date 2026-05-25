// 定义一个简单的用户对象，使用更灵活的类型以支持动态添加属性
interface User {
    name: string;
    [key: string]: any; // 索引签名允许添加其他属性
}

var user3: User = {
    name: "Alice"
};

// 可选链不能用于赋值操作，需要先确保对象结构存在
// 我们可以使用逻辑来安全地创建嵌套对象结构
if (!user3.address) {
    user3.address = {};
}
user3.address.city = "Beijing";

console.log("用户: " + JSON.stringify(user3));
