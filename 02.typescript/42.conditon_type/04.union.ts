// ToArray 会将类型 T 转换为数组类型
// 当 T 是联合类型时，会自动分布处理每个类型
type ToArray<T> = T extends any ? T[] : never;

// 联合类型会自动分布
// string | number 会分布为：ToArray<string> | ToArray<number>
// 即：string[] | number[]
type StrOrNum = ToArray<string | number>;

// 可以赋值 string[] 或 number[]
var arr42: StrOrNum = ["hello"];
// 也可以赋值 number[] 
arr42 = [42];

console.log("数组: " + arr42);
