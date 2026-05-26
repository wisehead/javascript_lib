// 通用错误处理包装函数
// 接受一个异步函数，返回 Result 类型
async function withErrorHandling<T>(
    fn: () => Promise<T>
): Promise<Result<T, Error>> {
    try {
        // 执行传入的异步函数
        var data = await fn();
        // 返回成功结果
        return { ok: true, value: data };
    } catch (error) {
        // 返回错误结果
        return { ok: false, error: error as Error };
    }
}

// 定义 Result 类型
type Result<T, E> = 
    | { ok: true; value: T }
    | { ok: false; error: E };

// 使用通用错误处理
//
async function handleDataFetch() {
    var result45b  = await withErrorHandling(async function() {
        var response = await fetch("/api/data");
        return response.json();
    });

    // 根据结果处理
    if (result45b.ok) {
        console.log("数据: " + JSON.stringify(result45b.value));
    } else {
        console.error("错误:", result45b.error);
    }
    
    return result45b;
}

// 调用异步函数
handleDataFetch();

// 添加空的 export 使文件成为模块
export {};
