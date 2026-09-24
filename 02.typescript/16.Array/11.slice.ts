const arr: number[] = [10, 20, 30, 40, 50];

// 取索引1 ~ 3（不包含3） => [20,30]
const s1 = arr.slice(1, 3);
console.log(s1); // [20,30]

// 从索引2取到末尾
const s2 = arr.slice(2);
console.log(s2); // [30,40,50]

// 负数：倒数2个元素
const s3 = arr.slice(-2);
console.log(s3); // [40,50]

// 浅拷贝整个数组
const copy = arr.slice();
