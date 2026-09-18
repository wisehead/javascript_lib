// 将本文件声明为模块，避免顶层声明与其他文件（14.Number/06.binary.ts、
// 15.String/10.binary.ts）的同名函数/变量在全局作用域冲突
export {};

// # TypeScript 数字转二进制
// 核心方法：`num.toString(2)`
// > 返回**二进制字符串**，不带前缀 `0b`

const num = 10;
const binStr = num.toString(2);
console.log(binStr); // "1010"

// ## 常用变体
// ### 1. 固定长度，不足前面补0（例如固定8位）
function toBinFixed(n: number, len: number): string {
  return n.toString(2).padStart(len, '0');
}

console.log(toBinFixed(5, 8)); // "00000101"

// ### 2. 带 `0b` 前缀
const n = 10;
const bin = `0b${n.toString(2)}`;
console.log(bin); // "0b1010"

// ## 注意点
// 1. **负数**：`toString(2)` 返回带负号的二进制，不是补码
(-10).toString(2); // "-1010"
// > 要获取**二进制补码**，用 `(n >>> 0).toString(2)`（32位无符号）
(-10 >>> 0).toString(2); // "11111111111111111111111111110110"

// 2. 只能处理安全整数，超大数字建议用 BigInt
const big = 1234567890123456789n;
console.log(big.toString(2));

// ## 封装成TS类型函数
/**
 * 数字转二进制字符串
 * @param num 目标数字
 * @param padLength 可选，补齐位数
 */
function numberToBinary(num: number, padLength?: number): string {
  let str = num.toString(2);
  if (padLength) str = str.padStart(padLength, '0');
  return str;
}

// 要不要顺便写二进制字符串转回数字的工具函数？
