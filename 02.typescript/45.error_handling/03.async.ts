// 定义用户接口
interface User {
    id: number;
    name: string;
}

// 模拟获取用户的异步函数
async function fetchUser(id: number): Promise<Result<User, Error>> {
    try {
        // 模拟网络请求
        var response = await fetch("/api/users/" + id);
        var user = await response.json();
        // 返回成功结果
        return { ok: true, value: user };
    } catch (error) {
        // 返回错误结果
        return { ok: false, error: error as Error };
    }
}

// 主函数
async function main() {
    // 调用异步函数
    var result = await fetchUser(1);

    // 处理结果
    if (result.ok) {
        console.log("用户: " + JSON.stringify(result.value));
    } else {
        console.log("错误: " + result.error.message);
    }
}

// 执行主函数
main();