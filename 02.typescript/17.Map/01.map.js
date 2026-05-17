"use strict";
const map = new Map();
map.set('one', 1);
map.set('two', 2);
console.log(map.get('one')); // 输出: 1
console.log(map.has('two')); // 输出: true
map.delete('one');
console.log(map.size); // 输出: 1
map.forEach((value, key) => {
    console.log(key, value); // 输出: two 2
});
map.clear();
console.log(map.size); // 输出: 0
