// 定义混合类型
interface Mixed {
    id: number;
    name: string;
    age: number;
    email: string;
    active: boolean;
}

// 提取所有字符串类型的键
type StringKeys<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

// 提取所有数字类型的键
type NumberKeys<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];

// 测试
type StringProps = StringKeys<Mixed>;  // "name" | "email"
type NumberProps = NumberKeys<Mixed>;  // "id" | "age"

// 实际应用：获取字符串属性的值
function getStringProps<T, K extends StringKeys<T>>(
    obj: T,
    keys: K[]
): T[K][] {
    return keys.map(key => obj[key]);
}

const mixed: Mixed = {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@test.com",
    active: true
};

const strings = getStringProps(mixed, ["name", "email"]);
console.log("字符串属性: " + strings.join(", "));