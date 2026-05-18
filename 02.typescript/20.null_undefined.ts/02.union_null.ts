// 联合类型：可以是字符串或 null
// 显式声明值可能为空
var name1: string | null = "Alice";
name1 = null;  // 正确：可以赋值为 null

// 访问可能为 null 的值需要先检查
// 函数参数可能是字符串或 null
function getLength(str: string | null): number {
    // 使用条件检查是否为 null
    if (str === null) {
        return 0;  // null 时返回 0
    }
    // TypeScript 会推断 str 不是 null
    return str.length;
}

console.log("长度: " + getLength("hello"));
console.log("长度: " + getLength(null));