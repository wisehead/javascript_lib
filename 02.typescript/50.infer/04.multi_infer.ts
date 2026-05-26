// 提取元组的前两个元素类型
type FirstTwo<T> = T extends [infer A, infer B, ...rest: any[]] ? [A, B] : never;

// 测试
type Tuple = [string, number, boolean];
type FirstTwoTypes = FirstTwo<Tuple>; // [string, number]

// 提取对象属性
type ObjectValue<T> = T extends { value: infer V } ? V : never;

type WithValue = { value: string; name: string };
type ExtractedValue = ObjectValue<WithValue>; // string

// 使用示例
var tupleResult: FirstTwoTypes = ["hello", 123];
console.log("元组: " + JSON.stringify(tupleResult));