// 定义类型 A
interface A {
    a: string;
}

// 定义类型 B
interface B {
    b: number;
}

// 使用接口继承多个接口
// 需要使用 extends 继承多个接口
interface AB extends A, B {
    c: boolean;
}

// 使用交叉类型（更简洁）
// 直接使用 & 符号组合类型
type ABType = A & B & { c: boolean };

// 两种方式都能创建包含所有属性的类型
var obj: ABType = { a: "hello", b: 42, c: true };
console.log("对象: " + JSON.stringify(obj));