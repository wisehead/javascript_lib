// 定义用户接口
interface User43B {
    // 用户 ID
    id: number;
    // 用户名
    name: string;
    // 用户年龄
    age: number;
}

// 使用 as 关键字重映射键名
// 为所有键添加前缀
type WithPrefix<T, Prefix extends string> = {
    // 使用模板字面量类型重命名键
    // Capitalize 将首字母大写
    [P in keyof T as `${Prefix}${Capitalize<string & P>}`]: T[P];
};

// 使用 WithPrefix 添加 "user" 前缀
type PrefixedUser = WithPrefix<User43B, "user">;

// 转换后的类型：
// { userId: number; userName: string; userAge: number }

// 使用带前缀的类型
var user43b: PrefixedUser = { userId: 1, userName: "Alice", userAge: 25 };

console.log("带前缀: " + JSON.stringify(user43b));

/*
代码解释：

[P in keyof T as `${Prefix}${Capitalize<string & P>}`]: T[P];

这行代码的作用是对对象类型的键进行重新映射（Remapping），具体分解如下：

1. [P in keyof T] - 遍历类型T的所有键
   - keyof T 会返回类型T的所有键组成的联合类型
   - P 是迭代变量，代表每个键

2. as `${Prefix}${Capitalize<string & P>}` - 键名重映射
   - as 关键字用于重新映射键名
   - 模板字面量类型，将前缀和首字母大写的属性名组合
   - Prefix 是传入的前缀字符串
   - string & P 确保P被当作字符串处理
   - Capitalize<P> 将字符串的首字母大写

3. : T[P] - 保持原始值类型不变
   - 这部分定义了新属性的值类型仍为原类型对应属性的值类型

例如：
- 对于属性 "id"，经过映射后变成 "userId"
- 对于属性 "name"，经过映射后变成 "userName" 
- 对于属性 "age"，经过映射后变成 "userAge"
*/