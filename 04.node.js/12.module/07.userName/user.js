// user.js
const name = 'Alice';
const age = 30;

// 方式一：使用 module.exports 导出单个对象或值
// module.exports = {
//   name: name,
//   age: age,
//   sayHello: () => {
//     console.log(`Hello, my name is ${name}.`);
//   }
// };

// 方式二：使用 exports 导出多个具名变量
// exports 是 module.exports 的一个引用
exports.name = name;
exports.age = age;
exports.sayHello = () => {
  console.log(`Hello, my name is ${name}.`);
};