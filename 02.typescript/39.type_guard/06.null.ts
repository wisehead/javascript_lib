// 定义一个可能为 null 的函数参数
function getLength(str: string | null): number {
    // 直接检查 str 不等于 null
    // 在条件为 true 时，TypeScript 知道 str 不是 null
    // 此时可以安全地访问 str 的属性
    if (str !== null) {
        return str.length;
    }

    // null 情况的处理
    return 0;
}

// 调用测试
console.log(getLength("hello"));  // 正常字符串
console.log(getLength(null));      // 传入 null