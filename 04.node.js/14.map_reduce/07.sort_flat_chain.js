// ===== sort / flat / flatMap / 链式调用 =====

// sort：排序，会"原地修改"原数组并返回它
// 默认按字符串比较，数字排序必须传比较函数
const nums = [10, 1, 5, 22, 3];
const asc = [...nums].sort((a, b) => a - b);  // 用副本避免改动原数组
console.log(asc);  // [1, 3, 5, 10, 22]
const desc = [...nums].sort((a, b) => b - a);
console.log(desc); // [22, 10, 5, 3, 1]

// flat：把嵌套数组"拍平"，参数为拍平深度（默认 1）
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());       // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));      // [1, 2, 3, 4, 5, 6]

// flatMap：先 map 再 flat 一层，常用于"一个元素展开成多个"
const sentences = ['hello world', 'foo bar'];
const allWords = sentences.flatMap(s => s.split(' '));
console.log(allWords); // ['hello', 'world', 'foo', 'bar']

// 链式调用：map / filter / reduce 组合完成复杂数据处理
const orders = [
    { product: 'A', price: 100, paid: true },
    { product: 'B', price: 200, paid: false },
    { product: 'C', price: 300, paid: true }
];
// 需求：已支付订单的总金额
const totalPaid = orders
    .filter(o => o.paid)          // 只保留已支付
    .map(o => o.price)            // 取出金额
    .reduce((acc, p) => acc + p, 0); // 求和
console.log(totalPaid); // 400
