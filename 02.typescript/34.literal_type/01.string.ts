// 定义字符串字面量类型
// direction 只能是四个特定值之一
var direction: "up" | "down" | "left" | "right";

// 正确：赋值为字面量类型中的值
direction = "up";

// 错误：赋值不在列表中的值
// direction = "upup"; // 编译错误！

console.log("方向: " + direction);

// 使用类型别名创建可复用的字面量类型
// 定义状态类型：只能是三个固定值之一
type Status = "pending" | "active" | "completed";

// 使用类型别名
var currentStatus: Status = "active";
console.log("状态: " + currentStatus);