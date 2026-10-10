// # TypeScript 数组插入操作

// >
// > TS 数组本质就是 JS 数组，只是多类型约束，下面分**头部、尾部、指定下标、不修改原数组（不可变）**四种场景

// ## 1. 尾部追加（push）【修改原数组】
{
  const arr: number[] = [1,2,3];
  arr.push(4);
  console.log(arr); // [1,2,3,4]
}

// ## 2. 头部插入（unshift）【修改原数组】
{
  const arr: number[] = [1,2,3];
  arr.unshift(0);
  console.log(arr); // [0,1,2,3]
}

// ## 3. 指定下标插入（splice）【修改原数组】

// 语法：`arr.splice(startIndex, deleteCount, item1, item2...)`

// - startIndex：插入位置
// - deleteCount：删除几个元素，**插入填 0**
{
  const arr: number[] = [1,2,3];
  arr.splice(2, 0, 99); // 在索引2位置插入99
  console.log(arr); // [1,2,99,3]
}

// ## 4. 不可变插入（推荐React/状态管理，不改动原数组）

// ### 方式A：slice + 展开运算符
{
  const arr: number[] = [1,2,3];
  const insertIndex = 2;
  const newArr = [...arr.slice(0, insertIndex), 99, ...arr.slice(insertIndex)];
  console.log(newArr); // [1,2,99,3]
}

// ### 方式B：toSpliced（ES2023，返回新数组，TS支持）
{
  const arr: number[] = [1,2,3];
  const newArr = arr.toSpliced(2, 0, 99);
  console.log(newArr); // [1,2,99,3]
}

// ## 5. 泛型封装通用插入函数

/**
 * 数组指定位置插入元素，返回新数组（不可变）
 * @param arr 原数组
 * @param index 插入位置
 * @param item 插入元素
 */
function insertItem<T>(arr: T[], index: number, item: T): T[] {
  return [...arr.slice(0, index), item, ...arr.slice(index)];
}

const list = [10,20,30];
const res = insertItem(list, 1, 99);
console.log(res); // [10,99,20,30]

// ## 注意点

// 1. `splice` / `push` / `unshift` **会改变原数组**；状态管理尽量用不可变方式
// 2. index 超过数组长度：会插到末尾；负数索引从倒数开始
// 3. 类型：`T[]` 通用，`readonly T[]` 只读数组不能调用 splice/push

// 需要我顺便对比下**数组删除**的 TS 写法吗？
