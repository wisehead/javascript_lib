"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userAge = exports.userName = exports.User = exports.age = exports.name = void 0;
exports.greet = greet;
// 导出变量
exports.name = "Alice";
exports.userName = exports.name;
exports.age = 25;
exports.userAge = exports.age;
// 导出函数
function greet(message) {
    return "Hello, " + message;
}
// 导出类
class User {
    name;
    // 构造函数参数属性
    constructor(name) {
        this.name = name;
    }
    // 自我介绍方法
    introduce() {
        return "I am " + this.name;
    }
}
exports.User = User;
