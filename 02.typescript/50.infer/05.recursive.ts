// 深度只读类型 - 递归应用 infer
type DeepReadonly<T> = T extends Function
    ? T
    : T extends object
        ? { readonly [P in keyof T]: DeepReadonly<T[P]> }
        : T;

// 测试
interface User50 {
    name: string;
    address: {
        city: string;
        zip: string;
    };
}

type ReadonlyUser = DeepReadonly<User50>;

// 扁平化 Promise 类型
type FlattenPromise<T> = T extends Promise<infer U>
    ? U extends Promise<any>
        ? FlattenPromise<U>
        : U
    : T;

type Nested = Promise<Promise<string>>;
type Flat = FlattenPromise<Nested>; // string

// 使用示例
var user: ReadonlyUser = {
    name: "Alice",
    address: { city: "Beijing", zip: "100000" }
};
// user.name = "Bob"; // 错误：只读
console.log("深度只读: " + user.name);