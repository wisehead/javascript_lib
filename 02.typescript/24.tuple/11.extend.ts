let tuple1: [number, string] = [42, "Hello"];
let tuple2: [boolean] = [true];

let extendedTuple: [number, string, ...typeof tuple2] = [42, "Hello", ...tuple2];

console.log(extendedTuple); // 输出: [42, "Hello", true]