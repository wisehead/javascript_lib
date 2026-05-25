// 定义两个接口，它们有不同的属性
interface A {
    a: string;  // 只有属性 a
}

interface B {
    b: number;  // 只有属性 b
}

// 接收联合类型的函数
function process(obj: A | B): void {
    // 使用 in 检查对象是否包含属性 "a"
    if ("a" in obj) {
        // 在 if 分支中，TypeScript 知道 obj 包含属性 a
        // 因此 obj 的类型被缩小为 A
        console.log("A 的属性 a: " + obj.a);
    } else {
        // else 分支中，obj 不包含属性 a
        // TypeScript 知道 obj 只能是 B 类型
        // 因此可以安全访问属性 b
        console.log("B 的属性 b: " + obj.b);
    }
}

// 测试调用
process({ a: "hello" });  // 传入包含属性 a 的对象
process({ b: 42 });       // 传入包含属性 b 的对象