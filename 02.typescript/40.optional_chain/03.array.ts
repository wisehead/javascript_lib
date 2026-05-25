// 定义一个用户数组
var users = [
    { name: "Alice" },
    { name: "Bob" }
];

// 安全访问数组第一个元素的名字
// users?.[0] 存在，返回 "Alice"
var firstUser = users?.[0]?.name;

// 安全访问数组中不存在的元素
// users?.[9] 不存在（数组只有2个元素），返回 undefined
var tenthUser = users?.[9]?.name;

console.log("第一个用户: " + firstUser);
console.log("第十个用户: " + tenthUser);