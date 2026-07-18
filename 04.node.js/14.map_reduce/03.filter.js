// ===== filter =====
// filter：遍历数组，保留回调返回 true 的元素，组成一个新数组
// 返回的数组长度 <= 原数组，常用于"筛选/过滤"数据

const nums = [1, 2, 3, 4, 5, 6];

// 例1：保留偶数
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6]

// 例2：保留大于 3 的数
const big = nums.filter(n => n > 3);
console.log(big); // [4, 5, 6]

// 例3：从对象数组中筛选符合条件的对象
const users = [
    { id: 1, name: 'Alice', active: true },
    { id: 2, name: 'Bob', active: false },
    { id: 3, name: 'Carol', active: true }
];
const activeUsers = users.filter(u => u.active);
console.log(activeUsers); // [{Alice}, {Carol}]

// 例4：去除假值（0、''、null、undefined、NaN、false）
const messy = [0, 1, '', 'hi', null, 2, undefined, NaN];
const clean = messy.filter(Boolean);
console.log(clean); // [1, 'hi', 2]
