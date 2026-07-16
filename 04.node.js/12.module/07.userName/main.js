// main.js
const user = require('./user.js');

console.log(user.name); // 输出: Alice
user.sayHello(); // 输出: Hello, my name is Alice.

// 也可以直接解构
const { name, age } = require('./user.js');
console.log(name); // 输出: Alice
console.log(age); // 输出: 30