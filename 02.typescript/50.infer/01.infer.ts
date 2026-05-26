// 从 Promise 中提取值类型
// 如果 T 是 Promise<V>，则返回 V；否则返回 never
type ValueOf<T> = T extends Promise<infer V> ? V : never;

// 测试
type Str = ValueOf<Promise<string>>;  // string
type Num = ValueOf<Promise<number>>; // number
type NotPrm = ValueOf<string>;        // never

// 使用示例
var promise: Promise<string> = Promise.resolve("hello");
var value: ValueOf<typeof promise> = "world";

console.log("字符串提取: " + (typeof value === "string" ? "成功" : "失败"));
