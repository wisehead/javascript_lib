// 定义一个自定义类型守卫函数
// 返回类型使用 "value is Type" 格式
// 这告诉 TypeScript：当函数返回 true 时，参数类型就是 string
function isString(value: any): value is string {
    // 使用 typeof 检查是否为字符串
    return typeof value === "string";
}

// 另一个自定义守卫：检查是否为数字
function isNumber(value: any): value is number {
    return typeof value === "number";
}

// 定义一个数组类型守卫
function isArray(value: any): value is any[] {
    return Array.isArray(value);
}

// 处理值的函数
function processValue(value: string | number | any[]): void {
    // 使用自定义守卫进行类型检查
    if (isString(value)) {
        // TypeScript 知道 value 是 string 类型
        // 可以调用 toUpperCase() 方法
        console.log("字符串转大写: " + value.toUpperCase());
    } else if (isNumber(value)) {
        // TypeScript 知道 value 是 number 类型
        // 可以调用 toFixed() 方法
        console.log("数字格式化: " + value.toFixed(2));
    } else if (isArray(value)) {
        // TypeScript 知道 value 是数组类型
        console.log("数组长度: " + value.length);
    }
}

// 测试调用
processValue("hello");
processValue(3.14159);
processValue([1, 2, 3, 4, 5]);