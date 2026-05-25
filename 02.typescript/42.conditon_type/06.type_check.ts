// 检查类型是否为 any
// any 与任何类型交叉都会得到 any，0 extends any 为 true
type IsAny<T> = 0 extends (1 & T) ? true : false;

// 测试 IsAny
// any 是特殊类型，与任何类型交叉都返回 any
type A42 = IsAny<any>;       // true
// string 不是 any
type B42 = IsAny<string>;    // false
var a42: A42 = true;
var b42: B42 = false;
console.log("any 是 any?: " + a42);
console.log("string 是 any?: " + b42);

// 检查类型是否可以赋值
// 如果 T 可以赋值给 U，返回 true，否则返回 false
type IsAssignableTo<T, U> = T extends U ? true : false;

// 测试类型可赋值性
// string 可以赋值给 any，所以返回 true
type CanAssign42 = IsAssignableTo<string, any>;
var canAssignValue: CanAssign42 = true;
console.log("string 赋值给 any?: " + canAssignValue);