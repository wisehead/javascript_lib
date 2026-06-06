// 变量声明
let personName = "Alice";
let age = 30;
const pi = 3.14;
//3.函数声明
function greet(name) {
    return `Hello, ${name}!`;
}
const greet2 = (name) => "Hello, " + name;
//4.类声明
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
//5.枚举声明
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//6.命名空间声明
var MyNamespace;
(function (MyNamespace) {
    function sayHello() {
        console.log("Hello from MyNamespace!");
    }
    MyNamespace.sayHello = sayHello;
})(MyNamespace || (MyNamespace = {}));
//7.模块声明    
export function add(a, b) {
    return a + b;
}
//9.泛型声明：允许在函数、接口或类中使用类型参数，以实现更灵活和可重用的代码。
function identity(arg) {
    return arg;
}
//10.模块和导入导出（Modules & Imports/Exports）
//导出
export class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
// import { Person } from './person';
//11.类型断言（Type Assertions）
let value = "hello";
let strLength = value.length;
//12.类型推断（Type Inference）
//TypeScript 在某些情况下会自动推断变量的类型。例如，在声明变量并赋值时，TypeScript 会推断出该变量的类型。
let num = 10; // TypeScript 推断 num 为 number 类型
//13.类型守卫（Type Guards）
// TypeScript 提供了类型守卫（如 typeof 和 instanceof），用于在运行时缩小变量的类型范围。
function isString(value) {
    return typeof value === 'string';
}
//14. 异步编程（Asynchronous Programming）
// TypeScript 完全支持异步编程，可以使用 async/await 语法来处理异步操作。
async function fetchData() {
    const response = await fetch("https://example.com");
    const data = await response.text();
    return data;
}
//15.错误处理（Error Handling）
// TypeScript 允许使用 try/catch 块进行错误处理，还可以使用类型来描述错误的类型。
try {
    throw new Error("Something went wrong");
}
catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
