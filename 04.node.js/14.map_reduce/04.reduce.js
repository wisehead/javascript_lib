// ===== reduce =====
// reduce：把数组"归约"成单个值（数字、字符串、对象、数组皆可）
// 语法：arr.reduce((acc, cur, index, arr) => 新的acc, 初始值)
//   acc  累加器（上一次回调的返回值）
//   cur  当前元素
//   初始值：建议总是传，避免空数组报错和首次取值歧义

const nums = [1, 2, 3, 4];

// 例1：求和，初始值 0
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10

// 例2：求最大值
const max = nums.reduce((acc, cur) => (cur > acc ? cur : acc), nums[0]);
console.log(max); // 4

// 例3：数组转对象（按 id 建立索引）
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
const byId = users.reduce((acc, u) => {
    acc[u.id] = u.name;
    return acc;
}, {});
console.log(byId); // { '1': 'Alice', '2': 'Bob' }

// 例4：统计词频（分组计数）
const words = ['a', 'b', 'a', 'c', 'b', 'a'];
const count = words.reduce((acc, w) => {
    acc[w] = (acc[w] || 0) + 1;
    return acc;
}, {});
console.log(count); // { a: 3, b: 2, c: 1 }

// 例5：map + filter 用一次 reduce 完成（先过滤偶数再翻倍）
const result = nums.reduce((acc, n) => {
    if (n % 2 === 0) acc.push(n * 2);
    return acc;
}, []);
console.log(result); // [4, 8]
