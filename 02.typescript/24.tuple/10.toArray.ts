let tuple5: [number, string, boolean] = [42, "Hello", true];

// 转换为数组并使用数组方法
let array = Array.from(tuple5);
array.push("New Element");

console.log(array); // 输出: [42, "Hello", true, "New Element"]