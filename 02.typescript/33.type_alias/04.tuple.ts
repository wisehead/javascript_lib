// 元组类型别名：定义坐标
// Coordinate 是一个包含两个数字的元组
type Coordinate = [number, number];

// 元组类型别名：定义姓名和年龄
// NameAge 是一个字符串和数字的元组
type NameAge = [string, number];

// 使用元组类型别名
var coord: Coordinate = [10, 20];
var person: NameAge = ["Alice", 25];

console.log("坐标: " + coord);
console.log("信息: " + person[0] + ", " + person[1]);