// user.mjs

// 具名导出
export const name = 'Bob';
export const age = 25;

// 默认导出
const sayHello = () => {
  console.log(`Hello, my name is ${name}.`);
};
export default sayHello;