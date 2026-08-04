const util = require('util');

const arrBuffer = new ArrayBuffer(8);
console.log(util.types.isArrayBuffer(arrBuffer)); // true
console.log(util.types.isArrayBuffer([])); // false

console.log(util.types.isDate(new Date())); // true
console.log(util.types.isDate('2023-01-01')); // false