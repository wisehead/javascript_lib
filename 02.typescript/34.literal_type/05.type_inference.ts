// 使用 var 声明并赋值
// TypeScript 会推断为宽泛类型
var name1 = "Alice";    // 类型: string（因为 var 可以重新赋值）
var age = 25;          // 类型: number
var enabled = true;    // 类型: boolean

console.log("名字: " + name + ", 年龄: " + age + ", 启用: " + enabled);

// 使用 as const 创建深度只读字面量
// 数组变为只读元组，值为字面量类型
var colors = ["red", "green", "blue"] as const;

// colors 的类型变为：
// readonly ["red", "green", "blue"]

// 访问数组元素
console.log("颜色: " + colors[0]);

// 尝试修改会报错
// colors[0] = "yellow"; // 编译错误：只读