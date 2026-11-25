### 基础说明

JS/TS 的 `Array.sort()` **默认按字符串字典序排序**，数字直接 sort 会出错，必须传入比较函数。

> 
> 比较函数规则：`(a,b) => 负数 → a在前；正数 → b在前；0 不变`

```
// 类型定义
type CompareFn<T> = (a: T, b: T) => number;
```

## 1. 数字数组排序

```
const arr = [3, 1, 8, 5];
// 升序
arr.sort((a, b) => a - b);
console.log(arr); // [1,3,5,8]

// 降序
arr.sort((a, b) => b - a);
console.log(arr); // [8,5,3,1]
```

⚠️ 注意：`sort` **原地修改原数组**，不想改原数组先拷贝：

```
const sorted = [...arr].sort((a,b) => a - b);
```

## 2. 对象数组（最常用）

```
interface Item {
  name: string;
  price: number;
}
const list: Item[] = [
  { name: "A", price: 12 },
  { name: "B", price: 5 },
  { name: "C", price: 19 },
];

// 按 price 升序
list.sort((a, b) => a.price - b.price);
// 按 price 降序
list.sort((a, b) => b.price - a.price);
```

## 3. 字符串排序（中文/英文）

英文直接比较：

```
const names = ["z", "a", "m"];
names.sort((a, b) => a.localeCompare(b)); // 升序
names.sort((a, b) => b.localeCompare(a)); // 降序
```

中文（带本地化）：

```
const words = ["张三", "李四", "王五"];
words.sort((a, b) => a.localeCompare(b, "zh-CN"));
```

## 4. 多字段组合排序（先按价格，价格相同按名称）

```
list.sort((a, b) => {
  if (a.price !== b.price) {
    return a.price - b.price;
  } else {
    return a.name.localeCompare(b.name);
  }
});
```

## 5. 泛型封装通用排序函数

```
/**
 * 数组通用排序
 * @param arr 原数组
 * @param getter 取排序字段
 * @param asc 是否升序
 */
function sortBy<T>(arr: T[], getter: (item: T) => number, asc = true): T[] {
  return [...arr].sort((a, b) => {
    const va = getter(a);
    const vb = getter(b);
    return asc ? va - vb : vb - va;
  });
}

// 使用
const res = sortBy(list, x => x.price, false);
```

## 6. 布尔、日期排序示例

```
// Date：时间戳相减
const dates = [new Date("2025-01-01"), new Date("2024-01-01")];
dates.sort((a, b) => a.getTime() - b.getTime());

// boolean：true=1，false=0
const flags = [true, false, true];
flags.sort((a,b) => (a ? 1 : 0) - (b ? 1 : 0));
```

## 常见坑

1. `sort` 原地变更数组，优先用 `[...arr].sort()`
2. 不要直接 `arr.sort()`，数字会变成字符串比对：`[10,2].sort() → [10,2]`
3. `localeCompare` 支持字符串，但**不能用于数字**
4. 对大数组性能够用；超大规模数据建议用其他排序实现

如果你需要，我可以给一个**稳定排序**版本（TS原生sort在部分引擎是非稳定排序）。