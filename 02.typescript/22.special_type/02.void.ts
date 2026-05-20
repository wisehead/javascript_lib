// 无返回值函数
// 函数执行后没有返回值
function logMessage(message: string): void {
    console.log("日志: " + message);
    // 没有 return 语句，或 return undefined
}

logMessage("Hello");

// void 变量（很少使用）
// 只能赋值为 undefined
var empty: void = undefined;
console.log("void 变量: " + empty);