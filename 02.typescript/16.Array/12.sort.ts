// # TypeScript 二维数组排序
// 假设类型：type Grid = number[][];
// 二维数组排序一般两种场景：**按某一行排序**、**按某一列排序**

// > 注意：Array.sort() 会原地修改原数组，建议先 .slice() 复制一份避免副作用。

// ## 场景1：按子数组（行）的第 j 个元素升序 / 降序
type Grid = number[][];

const grid: Grid = [
  [3, 10],
  [1, 5],
  [2, 8]
];

// 按第0列升序
const sortedByCol0 = [...grid].sort((a, b) => a[0] - b[0]);
console.log(sortedByCol0);
// [[1,5],[2,8],[3,10]]

// 按第1列降序
const sortedByCol1Desc = [...grid].sort((a, b) => b[1] - a[1]);
console.log(sortedByCol1Desc);
// [[3,10],[2,8],[1,5]]

// ### 封装通用函数（按指定列排序）
/**
 * @param arr 二维数组
 * @param colIndex 列下标
 * @param isAsc true=升序，false=降序
 */
function sort2DArray(arr: number[][], colIndex: number, isAsc = true): number[][] {
  return [...arr].sort((a, b) => {
    const valA = a[colIndex];
    const valB = b[colIndex];
    return isAsc ? valA - valB : valB - valA;
  });
}

// 使用
const res = sort2DArray(grid, 1, true);
console.log(res);

// ## 场景2：子数组内部排序（单行内元素排序）
const grid2: number[][] = [[3, 1, 2], [6, 4, 5]];
// 每行内部升序
const rowSorted = grid2.map(row => [...row].sort((a, b) => a - b));
console.log(rowSorted); // [[1,2,3],[4,5,6]]

// ## 场景3：字符串类型二维数组
// 数字减法 a-b 失效，改用 localeCompare
type StrGrid = string[][];
const strGrid: StrGrid = [["b", "2"], ["a", "1"]];
const sortedStr = [...strGrid].sort((a, b) => a[0].localeCompare(b[0]));
console.log(sortedStr);

// ## 关键坑点（TS/JS）
// 1. sort 默认**字典序**，纯数字必须传比较函数，否则 [10,2].sort() 得到 [10,2]
// 2. 原地修改：一定要用 [...arr] / .slice() 创建副本
// 3. 边界：如果某一行该列不存在值，会得到 NaN，排序错乱，可加兜底：
//    const valA = a[colIndex] ?? 0;
//    const valB = b[colIndex] ?? 0;

// ## 扩展：多字段排序（先按col0，相等再按col1）
const multiSort = [...grid].sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return a[1] - b[1];
});
console.log(multiSort);

// 你要的是**按列排序**，还是自定义比较规则（比如复杂对象二维数组）？
