// 联合类型：可以是字符串或数字
type StringOrNumber = string | number;

// 交叉类型：不兼容类型的交叉
// string & number = never（没有类型同时是字符串和数字）
type Both = string & number;

// 定义三个类型
type A46 = { a: string };
type B46 = { b: number };
type C46 = { c: boolean };

// 联合类型与交叉类型结合
// (A | B) & C 会将联合类型的每个分支都与 C 交叉
type Combined = (A46 | B46) & C46;

// 实际结果是：{ a: string; c: boolean } | { b: number; c: boolean }
// 即要么是 A + C，要么是 B + C
var obj46: Combined = { a: "hello", c: true };
console.log("组合: " + JSON.stringify(obj46));