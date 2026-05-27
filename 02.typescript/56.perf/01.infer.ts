// 不好的写法：过度标注类型
const name2: string = "Alice";
const age: number = 25;
const isActive: boolean = true;

// 好的写法：利用类型推断
const name1 = "Alice";
const age1 = 25;
const isActive1 = true;

// 函数返回值类型可以省略（TypeScript 会自动推断）
function add(a: number, b: number) {
    return a + b;
}

// 复杂对象使用类型推断
const user = {
    id: 1,
    name: "Bob",
    email: "bob@example.com"
};
// TypeScript 会推断出:
// { id: number; name: string; email: string }

// 只有在类型推断不准确时才需要显式标注
const elements: HTMLElement[] = [];

