// ### TypeScript 数组排序
//
// 重点：Array.sort() 原地排序、默认按字符串Unicode排序，非常容易踩坑

// #### 1. 数字数组（最常用）

const arr: number[] = [3, 1, 10, 2];
// 升序
arr.sort((a, b) => a - b);
// 降序
arr.sort((a, b) => b - a);

// ⚠️ 错误写法：arr.sort()，10 会排在 2 前面，因为按字符比较。

// #### 2. 对象数组，按字段排序

interface User {
  name: string;
  age: number;
}
const list: User[] = [
  { name: "A", age: 20 },
  { name: "B", age: 18 },
];

// 按age升序
list.sort((a, b) => a.age - b.age);

// 按字符串升序（localeCompare 支持中文）
list.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));

// #### 3. 稳定排序（ES2019+）
//
// 原生 sort 在旧引擎不稳定；如果需要稳定排序：
// - 方案A：用 toSorted()（ES2023，不修改原数组，返回新数组，推荐TS）

const newArr = arr.toSorted((a, b) => a - b);

// - 方案B：自己附加索引做稳定排序

// #### 4. 布尔、日期排序

// Date
const dates = [new Date("2025-01-02"), new Date("2025-01-01")];
dates.sort((a, b) => a.getTime() - b.getTime());

// boolean：true=1，false=0
const flags = [true, false, true];
flags.sort((a, b) => Number(a) - Number(b));

// #### 5. 常用封装小工具

type SortKey<T> = keyof T;
function sortBy<T>(arr: T[], key: SortKey<T>, asc = true): T[] {
  return arr.toSorted((a, b) => {
    const va = a[key];
    const vb = b[key];
    if (typeof va === "number" && typeof vb === "number") {
      return asc ? va - vb : vb - va;
    }
    return String(va).localeCompare(String(vb));
  });
}

// #### 6. 关键对比
// | API         | 是否原地修改 | 兼容性 |
// | .sort()     | 原地         | 全部   |
// | .toSorted() | 返回新数组   | ES2023 |

// #### 常见坑
// 1. 不要直接 sort 数字，必须传比较函数
// 2. 中文排序不要直接减，要用 localeCompare
// 3. 排序引用类型时，sort 会改动原数组，不想改优先 toSorted
