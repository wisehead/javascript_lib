// 定义一个接收联合类型的函数
// 参数 value 可能是字符串或数字
function printValue(value: string | number): void {
    // 使用 typeof 检查类型
    // 在 if 条件为 true 时，TypeScript 会自动将 value 缩小为 string 类型
    if (typeof value === "string") {
        // 此时 TypeScript 知道 value 是 string
        // 可以安全地访问字符串的 length 属性
        console.log("字符串长度: " + value.length);
    } else {
        // 进入 else 分支时，TypeScript 知道 value 不是 string
        // 只能是 number 类型
        // 可以安全地进行数学运算
        console.log("数字翻倍: " + (value * 2));
    }
}

// 测试调用
printValue("hello");  // 传入字符串
printValue(42);       // 传入数字