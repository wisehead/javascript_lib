// 可选参数：使用 ? 标记
// 参数可能是 string 或 undefined
function greet3(name?: string): string {
    // 检查是否为 undefined
    if (name === undefined) {
        return "Hello, stranger!";
    }
    return "Hello, " + name;
}

console.log(greet3("Alice"));
console.log(greet3());

// 可选属性：使用 ? 标记
// age 属性是可选的，可能不存在
interface User {
    name: string;
    age?: number;  // 可选属性
}

var user: User = { name: "Bob" };
console.log("用户: " + JSON.stringify(user));