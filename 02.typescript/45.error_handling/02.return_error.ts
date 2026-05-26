// 定义 Result 类型，使用联合类型
// 成功时包含 ok: true 和值，失败时包含 ok: false 和错误
type Result<T, E = Error> =
    | { ok: true; value: T }
    | { ok: false; error: E };

// 使用 Result 类型的除法函数
function safeDivide(a: number, b: number): Result<number, string> {
    // 检查除数是否为零
    if (b === 0) {
        // 返回错误结果
        return { ok: false, error: "Cannot divide by zero" };
    }
    // 返回成功结果
    return { ok: true, value: a / b };
}

// 调用函数并处理结果
var result45 = safeDivide(10, 2);

// 根据结果类型进行处理
if (result45.ok) {
    console.log("结果: " + result45.value);
} else {
    console.log("错误: " + result45.error);
}