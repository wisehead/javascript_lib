const util = require('util');
const obj = { a: 1, b: 2, c: { d: 3 } };
console.log(util.inspect(obj, { showHidden: false, depth: null, colors: true }));