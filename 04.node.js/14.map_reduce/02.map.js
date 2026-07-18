// ===== map =====
// map：遍历数组，对每个元素执行回调，返回值组成一个"等长"的新数组
// 不会修改原数组，常用于"转换/映射"数据

const nums = [1, 2, 3, 4];

// 例1：每个元素乘以 2
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]

// 例2：回调的第二个参数是索引 index
const withIndex = nums.map((n, i) => `${i}:${n}`);
console.log(withIndex); // ['0:1', '1:2', '2:3', '3:4']

// 例3：从对象数组中提取字段
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']

// 例4：改造对象结构（注意箭头函数返回对象字面量要用括号包裹）
const simplified = users.map(u => ({ label: u.name }));
console.log(simplified); // [{ label: 'Alice' }, { label: 'Bob' }]
