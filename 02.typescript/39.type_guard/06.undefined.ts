// 可能为 undefined 的字符串
function greet(name?: string): string {
    // 使用短路运算符：如果 name 为 undefined 或空字符串，使用默认值
    // 在 && 后的代码块中，TypeScript 知道 name 一定有值
    return name && "Hello, " + name;
}

// 测试
console.log(greet("RUNOOB"));
console.log(greet());