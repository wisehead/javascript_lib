// 定义一个用户对象数组，每个元素包含 id 和 name 两个属性
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

// 使用箭头函数作为 map 的回调，遍历 users 数组
// user => user.name 表示：接收一个 user 参数，返回该 user 的 name 属性
// map 会把每个元素的返回值收集成一个新数组
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']
