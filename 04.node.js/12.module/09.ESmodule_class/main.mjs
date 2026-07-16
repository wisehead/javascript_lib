// main.mjs

// // 导入具名导出
// import { name, age } from './user.mjs';
// console.log(name); // 输出: Bob

// // 导入默认导出
// import sayHello from './user.mjs';
// sayHello(); // 输出: Hello, my name is Bob.

// // 同时导入具名和默认导出
// import sayHello, { name } from './user.mjs';
// console.log(name);
// sayHello();

// 导入所有具名导出，并将其作为对象的属性
import * as user from './user.mjs';
console.log(user.name);
user.default(); // 默认导出会作为 default 属性