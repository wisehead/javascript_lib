// 使用条件类型实现 NonNullable
// 如果 T 是 null 或 undefined，返回 never（空类型），否则返回 T 本身
type NonNullable2<T> = T extends null | undefined ? never : T;

// 使用 NonNullable 类型
// string 不是 null/undefined，所以类型是 string
type A1 = NonNullable2<string>;
// null 是 null/undefined，所以类型是 never
type B1 = NonNullable2<null>;
// undefined 是 null/undefined，所以类型是 never
type C1 = NonNullable2<undefined>;

// 验证类型
var a1: A1 = "hello";
console.log("非空: " + a1);