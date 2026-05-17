let numLiteral1: number = 123.456;
let numObject1: Number = new Number(123.456);

console.log(numLiteral1.toFixed(2));      // 输出："123.46"
console.log(numObject1.valueOf());        // 输出：123.456