// ### TypeScript（底层就是 JS Number，64位双精度浮点数）
// 最大安全整数
Number.MAX_SAFE_INTEGER; // 9007199254740991 (2^53 - 1)
// 最小安全整数
Number.MIN_SAFE_INTEGER; // -9007199254740991

// Number 能表示的最大浮点数（不是安全整数！）
Number.MAX_VALUE; // 1.7976931348623157e+308
// Number 能表示的最小正浮点数（接近0）
Number.MIN_VALUE; // 5e-324

// > 重点区分（高频踩坑）
// 1. `MIN_VALUE` **不是负数最小值**，是**最小的正数**；负的极值：`-Number.MAX_VALUE`
// 2. 超过 `MAX_SAFE_INTEGER` 的整数，会丢失精度，要用 `BigInt`

// ### BigInt 场景（无上限，语言层面没有内置最大最小值）
const a = 9007199254740991n;
// BigInt 没有 MAX_SAFE_INTEGER / MAX_VALUE 常量

// ### 常用常量汇总表
// | 常量 | 值 | 含义 |
// |---|---|---|
// | Number.MAX_SAFE_INTEGER | 9007199254740991 | 可以精确表示的最大整数 |
// | Number.MIN_SAFE_INTEGER | -9007199254740991 | 可以精确表示的最小整数 |
// | Number.MAX_VALUE | ~1.79e+308 | 浮点数上限 |
// | Number.MIN_VALUE | ~5e-324 | 最靠近0的正数 |
// | Number.NEGATIVE_INFINITY | -Infinity | 负无穷 |
// | Number.POSITIVE_INFINITY | Infinity | 正无穷 |

// ### 工具判断示例
const x = 9007199254740993;
console.log(Number.isSafeInteger(x)); // false，精度丢失

// 如果你需要，我给你封装一个 TS 的安全数字校验函数。
