const util = require('util');

const obj = {
  name: 'Alice',
  details: {
    age: 25,
    hobbies: ['reading', 'coding']
  }
};

console.log(util.inspect(obj, { depth: 2, colors: true }));

const complexObj = {
  date: new Date(),
  regex: /test/g,
  nested: {
    array: [1, 2, 3],
    fn: function() {}
  }
};

console.log(util.inspect(complexObj, {
  showHidden: true,
  depth: null,
  colors: true
}));