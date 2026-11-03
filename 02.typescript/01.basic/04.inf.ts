// 写法1：直接字面量（最常用）
const inf = Infinity;
const negInf = -Infinity;

// 写法2：Number 静态常量
const inf2 = Number.POSITIVE_INFINITY;
const negInf2 = Number.NEGATIVE_INFINITY;

// 两者完全等价：
Infinity === Number.POSITIVE_INFINITY; // true
-Infinity === Number.NEGATIVE_INFINITY; // true

// 判断是否无穷
Number.isFinite(100); // true
Number.isFinite(Infinity); // false
Number.isFinite(-Infinity); // false

// 简单运算特性
Infinity + 100; // Infinity
-1000 / Infinity; // -0
Infinity * 0; // NaN

// 注意：Infinity 是 number 类型，不是 BigInt；BigInt 不支持无穷。

// 类型标注示例
let val: number = Infinity;

// 要不要顺便整理一份 TS Number 常量速查，放进笔记？
