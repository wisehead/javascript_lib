// 定义混合联合类型，包含字符串和数字
type T2 = "a" | "b" | "c" | 1 | 2 | 3;

// Extract：从 T 中提取指定类型
// 提取所有字符串类型："a"、"b"、"c"
type Letters = Extract<T2, string>;

// 使用提取后的类型
var letter: Letters = "a";

console.log("字母: " + letter);