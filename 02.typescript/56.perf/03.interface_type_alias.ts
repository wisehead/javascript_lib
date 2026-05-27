// 接口：适合定义对象类型，支持声明合并
interface User {
    id: number;
    name: string;
}

// 扩展接口
interface User {
    email: string;
}

// 类型别名：适合联合类型、元组、函数类型
type ID = string | number;
type Status = "pending" | "success" | "error";
type Callback = (data: string) => void;

// 工具类型通常使用 type
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;

// 性能考虑：接口的编译速度通常比类型别名快
// 对于简单的对象类型，可以使用 interface
interface Point {
    x: number;
    y: number;
}

// 对于联合类型，使用 type
// type Shape = Circle | Square | Triangle;