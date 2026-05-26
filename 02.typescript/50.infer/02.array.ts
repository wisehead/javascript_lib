// 提取数组的元素类型
// 如果 T 是数组 V[]，则返回 V
type ArrayElement<T> = T extends (infer V)[] ? V : never;

// 测试
type User = { name: string };
type Users = User[];

type E1 = ArrayElement<string[]>;   // string
type E2 = ArrayElement<Users>;       // User
type E3 = ArrayElement<number>;       // never（非数组）

// 使用示例
var users: Users = [{ name: "Alice" }];
var element: ArrayElement<Users> = users[0];

console.log("元素类型: " + element.name);