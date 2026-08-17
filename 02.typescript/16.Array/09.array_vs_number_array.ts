// number[] 和 Array<number> 的基本用法
// 两者完全等价，只是写法不同（number[] 是简写，Array<number> 是泛型写法）

// 1. 声明与初始化
let nums1: number[] = [1, 2, 3];
let nums2: Array<number> = [4, 5, 6];
console.log(nums1, nums2);

// 类型完全一致，可以互相赋值
nums1 = nums2;
console.log(nums1);

// 2. 用 Array 构造函数创建
let empty: number[] = new Array(); // 空数组
let filled: number[] = new Array(3).fill(0); // [0, 0, 0]
let literal: number[] = Array.of(1, 2, 3); // [1, 2, 3]（注意 new Array(3) 是长度为3的空数组）
let fromRange: number[] = Array.from({ length: 5 }, (_, i) => i * 2); // [0,2,4,6,8]
console.log(empty, filled, literal, fromRange);

// 3. 常用增删操作
const stack: number[] = [];
stack.push(1, 2, 3); // 尾部添加 -> [1,2,3]
console.log(stack.pop()); // 尾部弹出 -> 3
stack.unshift(0); // 头部添加 -> [0,1,2]
console.log(stack.shift()); // 头部弹出 -> 0
console.log(stack); // [1,2]

// splice(起始位置, 删除个数, ...插入元素)
const spliced: number[] = [1, 2, 3, 4, 5];
spliced.splice(1, 2, 99); // 删除 2,3 并插入 99
console.log(spliced); // [1, 99, 4, 5]

// 4. 访问与切片
const arr: number[] = [10, 20, 30, 40, 50];
console.log(arr.length); // 5
console.log(arr[0], arr[arr.length - 1]); // 10 50
console.log(arr.at(-1)); // 50，负索引取末尾
console.log(arr.slice(1, 3)); // [20, 30]，不修改原数组
console.log(arr.indexOf(30), arr.includes(99)); // 2 false

// 5. 遍历
for (const n of arr) {
    console.log("for-of:", n);
}
arr.forEach((n, i) => console.log(`forEach: index=${i}, value=${n}`));

// 6. 函数式方法（返回值类型由 TS 自动推断）
const doubled: number[] = arr.map(n => n * 2); // [20,40,60,80,100]
const bigs: number[] = arr.filter(n => n > 25); // [30,40,50]
const sum: number = arr.reduce((acc, n) => acc + n, 0); // 150
const found: number | undefined = arr.find(n => n > 25); // 30
console.log(doubled, bigs, sum, found);
console.log(arr.some(n => n > 45), arr.every(n => n > 5)); // true true

// 7. 排序：sort 默认按字符串比较，数字必须传比较函数
const unsorted: number[] = [10, 9, 100, 1];
console.log([...unsorted].sort()); // [1, 10, 100, 9] —— 错误结果
console.log([...unsorted].sort((a, b) => a - b)); // [1, 9, 10, 100] 升序
console.log([...unsorted].sort((a, b) => b - a)); // [100, 10, 9, 1] 降序

// 8. 合并、展开与最大最小值
const merged: number[] = [...nums2, ...unsorted]; // 展开运算符合并
console.log(merged.concat([7, 8]));
console.log(Math.max(...merged), Math.min(...merged));

// 9. 只读数组：ReadonlyArray<number> 等价于 readonly number[]
const ro: ReadonlyArray<number> = [1, 2, 3];
// ro.push(4);        // 编译报错：只读数组没有 push
console.log(ro.map(n => n + 1)); // 只读方法仍可用

// 10. 作为函数参数与返回值
function average(values: number[]): number {
    if (values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
}
console.log(average(arr)); // 30

// 剩余参数天然就是 number[]
function sumAll(...values: number[]): number {
    return values.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 11. 泛型 Array<T> 的其他实例，说明 number[] 只是其中一种
const strs: Array<string> = ["a", "b"];
const matrix: number[][] = [[1, 2], [3, 4]]; // 二维数组，等价于 Array<Array<number>>
console.log(strs, matrix[1][0]); // ["a","b"] 3
