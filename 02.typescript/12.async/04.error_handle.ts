function mayFail(shouldFail: boolean): Promise<string> {
    return new Promise(function(resolve, reject) {
        if (shouldFail) {
            reject(new Error("操作失败"));
        } else {
            resolve("操作成功");
        }
    });
}

async function handleError() {
    try {
        var result = await mayFail(true);
        console.log("结果: " + result);
    } catch (error: any) {
        console.log("捕获错误: " + error.message);
    }
}

handleError();