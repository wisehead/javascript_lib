const util = require('util');
console.log(util.types.isDate(new Date()));  // true
console.log(util.types.isMap(new Map()));    // true