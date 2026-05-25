// 定义联合类型，包含 a、b、c、d
type T = "a" | "b" | "c" | "d";

// Exclude：从 T 中排除指定类型
// 排除 "a"、"b"、"c"，只保留 "d"
type NonABC = Exclude<T, "a" | "b" | "c">;

// 使用排除后的类型，只能赋值 "d"
var value: NonABC = "d";

console.log("值: " + value);