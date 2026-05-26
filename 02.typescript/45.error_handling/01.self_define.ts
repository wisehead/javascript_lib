// 定义应用程序错误类
// 扩展内置 Error 类，添加错误码
class AppError extends Error {
    // 错误码，用于程序化处理错误
    code: string;

    // 构造函数
    constructor(message: string, code: string) {
        super(message);  // 调用父类构造函数
        this.name = "AppError";  // 设置错误名称
        this.code = code;  // 保存错误码
    }
}

// 安全的除法函数
function divide(a: number, b: number): number {
    // 检查除数是否为零
    if (b === 0) {
        // 抛出自定义错误
        throw new AppError("Cannot divide by zero", "DIVIDE_BY_ZERO");
    }
    return a / b;
}

// 使用 try-catch 捕获错误
try {
    var result = divide(10, 0);
} catch (error) {
    // 检查错误类型
    if (error instanceof AppError) {
        console.log("应用错误: " + error.message + ", 代码: " + error.code);
    } else {
        console.log("未知错误: " + error);
    }
}