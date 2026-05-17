// 定义返回 Promise 的函数
// Promise<{ name: string; age: number }> 指定了返回的用户对象类型
function getUser(): Promise<{ name: string; age: number }> {
    return Promise.resolve({ name: "Alice", age: 25 });
}

// async 函数：隐式返回 Promise
async function main2() {
    // await 会自动推断 user 的类型
    var user = await getUser();
    console.log("用户: " + JSON.stringify(user));
}

main2();