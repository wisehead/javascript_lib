// 可能为 undefined 的字符串
function greet(name?: string): string {
    // 如果 name 存在且非空，则返回问候语；否则返回默认问候语
    if (name) {
        return "Hello, " + name;
    } else {
        return "Hello, Guest"; // 默认问候语
    }
}

// 测试
console.log(greet("RUNOOB"));
console.log(greet());
