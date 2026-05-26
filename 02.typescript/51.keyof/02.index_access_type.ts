// 定义用户类型
interface User51B {
    id: number;
    name: string;
    email: string;
}

// 使用索引访问类型获取属性类型
type UserId = User51B["id"];      // number
type UserName = User51B["name"];  // string

// 可以使用联合类型进行多个键的访问
type UserIdAndName = User51B["id" | "name"];  // number | string

// 使用 keyof 获取所有属性类型的联合
type AllUserValues = User51B[keyof User51B];  // number | string

// 实际使用示例
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user51B: User51B = { id: 1, name: "Bob", email: "bob@test.com" };

// 获取 id 类型
const idValue: number = getValue(user51B, "id");
console.log("ID: " + idValue);

// 获取 name 类型
const nameValue: string = getValue(user51B, "name");
console.log("Name: " + nameValue);