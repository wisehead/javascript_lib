const lodash = require('lodash');
const array = [1, 2, 3, 4];
const reversedArray = lodash.reverse(array.slice()); // 使用 lodash 反转数组
console.log('Reversed Array:', reversedArray);