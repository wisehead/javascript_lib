"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = add;
exports.multiply = multiply;
// 默认导出：一个模块只能有一个默认导出
function add(a, b) {
    return a + b;
}
// 可以和其他导出混合使用
function multiply(a, b) {
    return a * b;
}
