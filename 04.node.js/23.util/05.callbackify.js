const util = require('util');
async function asyncFunc() {
  return 'Hello World';
}

const callbackFunc = util.callbackify(asyncFunc);

callbackFunc((err, result) => {
  if (err) throw err;
  console.log(result); // Hello World
});