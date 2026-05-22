"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 导入默认导出：可以取任意名字
const math_1 = __importDefault(require("./math"));
// 导入命名导出：需要使用花括号
const math_2 = require("./math");
console.log("加法: " + (0, math_1.default)(2, 3));
console.log("乘法: " + (0, math_2.multiply)(4, 5));
