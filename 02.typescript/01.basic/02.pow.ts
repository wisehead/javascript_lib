// 方式1：** 幂运算符（推荐，ES2016+）
const n = 3;
const res = 10 ** n;
console.log(res); // 1000

// 方式2：Math.pow
const res2 = Math.pow(10, n);
console.log(res2); // 1000

// ### 区别 & 注意点
// 1. `10 ** n`：简洁，和 Python 写法一致
// 2. `Math.pow(base, exp)`：老版本兼容
10 ** 0; // 1
10 ** -2; // 0.01
Math.pow(10, -2); // 0.01

// > ⚠️ 超大整数：JS/TS Number 是双精度浮点数，n > 30 左右会开始丢失精度；超大整数场景用 `BigInt`
const big = 10n ** 50n; // BigInt，无精度丢失

// ### 科学字面量（浮点数简写）
1e3; // 等价 10 ** 3 = 1000.0
1e-4; // 等价 10 ** -4 = 0.0001

// 要不要我顺便写一个 TS 工具函数，支持自动判断返回 number / bigint？
