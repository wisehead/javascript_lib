let tuple0: [number, string] = [42, "Hello"];
let tuple3: [boolean, number] = [true, 100];

//let result = tuple1.concat(tuple2); // 结果是一个数组: [42, "Hello", true, 100]
let result = [...tuple0, ...tuple3]; // 结果是一个数组: [42, "Hello", true, 100]
console.log(result); // 输出: [42, "Hello", true, 100]