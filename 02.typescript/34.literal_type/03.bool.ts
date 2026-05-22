// 定义布尔字面量类型
// isActive 只能是 true 或 false
var isActive: true | false;

// 赋值 true
isActive = true;

// 实际上 boolean 就是 true | false 的联合类型
// 所以这两种写法是等价的
var flag: boolean = true;

console.log("是否激活: " + isActive);