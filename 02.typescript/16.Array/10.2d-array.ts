// 加上 export {} 让本文件成为模块，避免与同目录其他文件的全局变量重名
export {};

// # TypeScript 二维数组定义 & 初始化
//
// 二维数组本质：`T[][]`，即数组的每一项又是数组。
//
// ## 1. 类型定义

// number 二维数组
let arr: number[][];

// string 二维数组
let strArr: string[][];

// 泛型写法
type Matrix<T> = T[][];
let m2: Matrix<number>;

// ## 2. 常用初始化方式
//
// ### 方式1：字面量直接初始化

const arr1: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];

// ### 方式2：指定行列，全部填充固定值
//
// ⚠️ 错误写法！`Array(row).fill(Array(col))` 所有行引用同一个数组，改一行全部改变

// ❌ 错误！共用子数组
const wrong = Array(3).fill(Array(2).fill(0));

// ✅ 正确（每行新建数组）

// 3行2列，全部初始化为0
const rows = 3;
const cols = 2;
const matrix: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));
// matrix = [[0,0],[0,0],[0,0]]

// ### 方式3：for循环初始化（最直观）

const matrix3: number[][] = [];
for (let i = 0; i < rows; i++) {
  matrix3[i] = [];
  for (let j = 0; j < cols; j++) {
    matrix3[i][j] = 0;
  }
}

// ### 方式4：初始化为空二维数组，后续push

const matrix4: number[][] = [];
matrix4.push([1, 2]);
matrix4.push([3, 4]);

// ## 3. 读取、赋值

const m: number[][] = Array.from({ length: 2 }, () => Array(2).fill(0));
m[0][1] = 5;          // 赋值
console.log(m[0][1]); // 读取

// ## 4. 配合DFS网格题目模板（LeetCode常用）

// 示例：m行n列网格
function createGrid(m: number, n: number): number[][] {
  return Array.from({ length: m }, () => Array(n).fill(0));
}

const grid = createGrid(4, 5); // 4行5列

// ## 快速对比
//
// | 写法                                          | 是否安全 | 说明                             |
// | --------------------------------------------- | -------- | -------------------------------- |
// | `Array(r).fill(Array(c).fill(0))`             | ❌不安全 | 行共享引用，修改一行全部变化     |
// | `Array.from({length:r}, ()=>Array(c).fill(0))`| ✅安全   | 推荐，一行代码                   |
// | `for循环嵌套new数组`                          | ✅安全   | 可控，适合复杂初始值             |
//
// 如果你需要，我可以顺带写**二维数组深拷贝、遍历、DFS遍历二维数组完整小例子**。
