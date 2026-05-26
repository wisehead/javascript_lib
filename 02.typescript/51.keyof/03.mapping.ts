// 定义用户类型
interface User52C {
    id: number;
    name: string;
    email: string;
    age: number;
}

// 将所有属性变为可选
type PartialUser52C = Partial<User52C>;

// 将所有属性变为只读
type ReadonlyUser52C = Readonly<User52C>;

// 自定义映射类型：将所有属性变为可选且字符串化
type Stringify<T> = {
    [P in keyof T]: string;
};

type StringifiedUser52C = Stringify<User52C>;

// 实际使用示例
const partialUser: PartialUser52C = {
    id: 1,
    name: "Alice"
    // email 和 age 可选
};

const readonlyUser: ReadonlyUser52C = {
    id: 1,
    name: "Bob",
    email: "bob@test.com",
    age: 25
};
// readonlyUser.name = "Charlie"; // 错误：只读

console.log("部分用户: " + partialUser.name);
console.log("只读用户: " + readonlyUser.name);