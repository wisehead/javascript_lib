// ===== forEach =====
// forEach：遍历数组执行副作用（打印、累加到外部变量等）
// 没有返回值（返回 undefined），不能链式调用，也不能用 break/continue 中断

const nums = [10, 20, 30];

// 例1：逐个打印，第二个参数是索引
nums.forEach((n, i) => {
    console.log(`索引 ${i} 的值是 ${n}`);
});

// 例2：累加到外部变量（这类"改外部状态"的场景更适合用 reduce）
let total = 0;
nums.forEach(n => {
    total += n;
});
console.log(total); // 60

// 例3：遍历对象数组做操作
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
users.forEach(u => console.log(`${u.id} -> ${u.name}`));
