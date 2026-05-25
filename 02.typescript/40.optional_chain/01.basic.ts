// 定义一个嵌套的用户对象
// 包含姓名和地址信息，地址中有城市
var user = {
    name: "RUNOOB",
    address: {
        city: "Beijing"
    }
};

// 传统方式：使用 && 逐层检查
// 这种方式代码冗长，容易遗漏
var city1 = user && user.address && user.address.city;

// 可选链方式：使用 ?. 运算符
// 如果任意一层为 null 或 undefined，直接返回 undefined
var city2 = user?.address?.city;

console.log("传统方式: " + city1);
console.log("可选链: " + city2);