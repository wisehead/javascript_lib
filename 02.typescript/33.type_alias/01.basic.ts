// 类型别名：为联合类型定义别名
// ID 可以是字符串或数字
type ID = string | number;

// 类型别名：为对象类型定义别名
// Point 表示一个坐标点
type Point = { x: number; y: number };

// 使用类型别名
var userId: ID = "123";
var productId: ID = 456;

// 使用 Point 类型别名
var point: Point = { x: 10, y: 20 };

console.log("用户ID: " + userId);
console.log("产品ID: " + productId);
console.log("坐标: " + JSON.stringify(point));