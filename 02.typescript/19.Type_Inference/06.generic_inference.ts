// 泛型函数：接受任意类型参数，返回同类型值
// T 会根据传入的参数自动推断
function identity<T>(arg: T): T {
    return arg;
}

// 传入字符串，T 推断为 string
var str = identity("hello");

// 传入数字，T 推断为 number
var num = identity(42);

// 传入对象，T 推断为对象类型
var obj = identity({ name: "TypeScript" });

console.log("字符串: " + str);
console.log("数字: " + num);
console.log("对象: " + JSON.stringify(obj));