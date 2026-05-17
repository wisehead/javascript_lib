// 混合数组包含 number 和 string
// TypeScript 推断为 (number | string)[]（联合类型）
var mixed = [1, "two", 3, "four"];

// 访问不同类型的元素
console.log("混合数组: " + mixed);
console.log("类型: " + typeof mixed[0] + ", " + typeof mixed[1]);