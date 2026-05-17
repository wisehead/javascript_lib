// TypeScript 推断返回类型为 number
// 因为返回的是 a + b 的结果
function add(a: number, b: number) {
    return a + b;
}

// TypeScript 推断返回类型为 string
// 因为返回的是字符串拼接结果
function greet2(name: string) {
    return "Hello, " + name;
}

// 调用函数，返回值类型已被正确推断
var result = add(1, 2);
var message = greet2("TypeScript");

console.log("加法结果: " + result);
console.log("问候语: " + message);