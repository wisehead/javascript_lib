let tuple: [number, string, boolean] = [42, "Hello", true];

// 移除最后一个元素
let lastElement = tuple.pop();

console.log(lastElement); // 输出: true
console.log(tuple);       // 输出: [42, "Hello"]

export {};