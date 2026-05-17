let strLiteral2: string = "Use string literals whenever possible!";
let strObject2: String = new String("Avoid using String objects.");

console.log(strLiteral2);                // 输出："Use string literals whenever possible!"
console.log(strObject2.valueOf());       // 输出："Avoid using String objects."