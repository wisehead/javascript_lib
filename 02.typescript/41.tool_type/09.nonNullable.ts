// 定义混合类型，包含字符串、null、undefined、数字
type T3 = string | null | undefined | number;

// NonNullable：排除 null 和 undefined
// 转换后只保留 string 和 number
type NotNull = NonNullable<T3>;

// 使用非空类型
var value3: NotNull = "hello";
value3 = 42;

// 尝试赋值 null 会报错
// value3 = null; // 错误：不能赋值 null

console.log("值: " + value3);