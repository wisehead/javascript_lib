// # TypeScript 获取数组最后一个元素
//
// > TS 本质复用 JS 数组语法，额外增加类型提示

// ## 方式1：`arr.at(-1)`（推荐，ES2022+）
{
    const arr: number[] = [10, 20, 30];
    const last = arr.at(-1);
    // last 类型：number | undefined
    console.log(last); // 30

    // 空数组返回 undefined
    const empty: string[] = [];
    console.log(empty.at(-1)); // undefined
}

// ## 方式2：`arr[arr.length - 1]`（兼容所有环境）
{
    const arr: number[] = [10, 20, 30];
    const last = arr[arr.length - 1];
    // 类型：number | undefined
    console.log(last); //30
}

// ## 方式3：解构（适合非空数组场景）
{
    const arr = [1, 2, 3];
    const [, ...rest] = arr;
    const last = rest.pop();
    console.log(last); // 3
}

// ## ✅ 类型小知识点
//
// - 数组为空时，两种方法都会得到 `undefined`，TS 会自动推断联合类型 `T | undefined`
// - 如果你确定数组一定不为空，可以用**非空断言 `!`**（谨慎使用）
{
    const arr: number[] = [10, 20, 30];
    const last = arr.at(-1)!; // number，去掉 undefined
    console.log(last); // 30
}

// ## 泛型工具：取数组元素类型（类型层面，不是运行时取值）
type Last<T extends any[]> = T extends [...any[], infer R] ? R : never;

type A = Last<[1, 2, 3]>; // 3
type B = Last<string[]>; // string
