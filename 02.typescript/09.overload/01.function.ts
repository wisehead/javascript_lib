// 多种重载签名
function greet3(name: string): string;
function greet3(name: string, greeting: string): string;

// 实现
function greet3(name: any, greeting?: any): any {
    if (greeting) {
        return greeting + ", " + name + "!";
    }
    return "Hello, " + name + "!";
}

console.log(greet3("Alice"));
console.log(greet3("Bob", "Hi"));