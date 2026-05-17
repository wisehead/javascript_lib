// 模拟异步操作
function delay(ms: number): Promise<string> {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("完成!");
        }, ms);
    });
}

async function main() {
    console.log("开始...");
    var result = await delay(100);
    console.log("结果: " + result);
    console.log("结束");
}

main();