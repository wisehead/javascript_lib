let strLiteral1: string = "Test";
let strObject1: String = new String("Test");

console.log(strLiteral1 === strObject1);  // 输出：false，内容相同，类型不同
console.log(strLiteral1 == strObject1);   // 输出：true，内容相同
console.log(strLiteral1 === strObject1.valueOf()); // 输出：true，将对象转为原始字符串后比较