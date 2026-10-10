// # TypeScript 数组合并（生成**新数组**，不修改原数组）

// >
// > TS 沿用 JS 的合并方式，增加类型标注，下面几种常用方案

// ## 1. 展开运算符 `[...a, ...b]` ✅ 最常用
{
  const a: number[] = [1, 2];
  const b: number[] = [3, 4];
  const merged: number[] = [...a, ...b];
  console.log(merged); // [1,2,3,4]
}

// - 优点：简洁，返回全新数组
// - 可多个数组拼接：`[...a, ...b, ...c, 99]`，还能顺便追加元素

// ## 2. `concat()` 方法
{
  const a: number[] = [1, 2];
  const b: number[] = [3, 4];
  const merged: number[] = a.concat(b);
  console.log(merged); // [1,2,3,4]
  // 多个数组 a.concat(b, c)
}

// >
// > `concat` 不会修改原数组，返回新数组；**只会扁平化一层**，如果数组里面嵌套数组不会深度展开。

// ## 3. 泛型封装通用合并函数
function mergeArray<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

{
  const list1 = [1,2];
  const list2 = [3,4];
  const result = mergeArray(list1, list2);
  console.log(result); // [1,2,3,4]
}

// ## 4. 类型不一致场景
{
  const arr1: (string | number)[] = [1, "a"];
  const arr2: (string | number)[] = [2, "b"];
  const merged = [...arr1, ...arr2];
  console.log(merged); // [1,"a",2,"b"]
}

// ## ❌ 不要用 push 批量合并（会修改原数组）
{
  const a: number[] = [1,2];
  const b: number[] = [3,4];
  a.push(...b); // a 原地被修改，不是生成新数组
}

// ## 对比小结

// | 方式 | 是否修改原数组 | 特点 |
// | --- | --- | --- |
// | `[...a, ...b]` | ❌ 不修改 | 写法简洁，推荐，支持穿插单个元素 |
// | `a.concat(b)` | ❌ 不修改 | 老环境兼容，支持传入多个数组参数 |
// | `push(...b)` | ✅ 修改原数组 | 原地追加，状态管理尽量避免 |

// ### 小提示

// - 如果需要**去重合并**，可以：`[...new Set([...a,...b])]`
// - 如果是**只读数组 `readonly T[]`**，展开和 concat 依然可用
