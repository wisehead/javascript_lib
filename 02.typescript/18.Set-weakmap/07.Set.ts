// # TypeScript Set
//
// TS 本身**没有新增独立的 Set 数据结构**，直接复用 JavaScript 原生 `Set`，TypeScript 只是给它加上类型标注。
//
// ## ✅ 基础用法
//
// ```

// 定义存储 string 的 Set
const s = new Set<string>();

s.add("a");
s.add("b");
s.add("a"); // 重复，不会存入

console.log(s.has("a")); // true
console.log(s.size);     // 2
s.delete("b");
s.clear();

// ```
//
// ## 📌 常用 API
//
// - `.add(value)`：添加元素，自动去重（严格相等 `===`）
// - `.has(value)`：判断是否存在，返回 boolean
// - `.delete(value)`：删除元素，返回是否删除成功
// - `.clear()`：清空全部
// - `.size`：只读属性，获取元素数量
// - 可迭代：`for (const item of s)` / `Array.from(set)`
//
// ## 🧩 泛型与类型
//
// ```

// 数字集合
const numSet = new Set<number>([1,2,3]);

// 对象集合：注意对象是引用类型，只有同一个引用才判定重复
type User = { id: number };
const userSet = new Set<User>();
const u1: User = { id:1 };
userSet.add(u1);
userSet.has(u1); // true
userSet.has({id:1}); // false 新对象，引用不一样

// ```
//
// ## 🆚 补充：WeakSet
//
// 同样原生支持，`WeakSet<T>`：
//
// - 只能存**对象引用**，不能存基础类型
// - 弱引用，不阻止GC，无 `.size`，不可遍历
//
// ## 小总结
//
// 1. TS 的 `Set` = JS 原生 Set + 类型泛型
// 2. 自动去重；**基础值按值比较，对象按引用比较**
// 3. 适合快速去重、成员存在性判断
//
// 需要我顺便对比一下 `Set` 和 TS 里 `Record` / `Map` 的选型场景吗？
