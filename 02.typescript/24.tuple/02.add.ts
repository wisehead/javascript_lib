var tuple = [42, "Hello"];
// 添加符合类型的元素
tuple.push("World"); // 合法，因为元组定义了可选的 string 类型
console.log(tuple); // 输出: [42, "Hello", "World"]

export {};