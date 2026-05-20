// 抛出异常的函数
// 函数永远不会正常返回，总会抛出错误
function throwError(message: string): never {
    throw new Error(message);
}

// 无限循环的函数
// 函数永远不会返回，程序会一直运行
function infiniteLoop(): never {
    while (true) {
        console.log("运行中...");
    }
}

// never 是所有类型的子类型
// 这意味着 never 可以赋值给任何类型
var neverValue: never = throwError("产生 never 值");
var num: number = neverValue;  // 正确：never 是 number 的子类型
console.log("never 赋值给 number: " + num);