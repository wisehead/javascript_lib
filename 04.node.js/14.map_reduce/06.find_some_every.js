// ===== find / findIndex / some / every / includes =====
// 这几个方法常和 map/filter 搭配使用，用于"查找"和"判断"

const nums = [1, 2, 3, 4, 5];
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// find：返回第一个满足条件的元素，找不到返回 undefined
const firstEven = nums.find(n => n % 2 === 0);
console.log(firstEven); // 2
const bob = users.find(u => u.name === 'Bob');
console.log(bob); // { id: 2, name: 'Bob' }

// findIndex：返回第一个满足条件元素的索引，找不到返回 -1
const idx = nums.findIndex(n => n > 3);
console.log(idx); // 3

// some：只要有一个元素满足条件就返回 true
const hasEven = nums.some(n => n % 2 === 0);
console.log(hasEven); // true

// every：所有元素都满足条件才返回 true
const allPositive = nums.every(n => n > 0);
console.log(allPositive); // true

// includes：判断数组是否包含某个具体值（基于 === 比较）
console.log(nums.includes(3)); // true
console.log(nums.includes(9)); // false
