var str = '1' 
// 双重断言，先将 str 断言为 any 类型，再断言为 number 类型
var str2:number = <number> <any> str   //str、str2 是 string 类型
console.log(str2)