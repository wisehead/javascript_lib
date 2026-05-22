// 泛型类型别名：定义结果类型
// Result<T> 是一个泛型类型，T 是成功时的数据类型
type Result<T> = { success: boolean; data?: T; error?: string };

// 泛型类型别名：定义键值对类型
// Pair<K, V> 有两个类型参数
type Pair<K, V> = { key: K; value: V };

// 使用泛型类型别名
var result: Result<string> = { success: true, data: "Hello" };
var pair: Pair<string, number> = { key: "age", value: 25 };

console.log("结果: " + JSON.stringify(result));
console.log("键值对: " + JSON.stringify(pair));