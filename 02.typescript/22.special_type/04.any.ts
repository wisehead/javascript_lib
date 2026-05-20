// any 可以是任意类型
// 完全绕过类型检查
var anything: any = "hello";
anything = 42;
anything = true;

// any 可以赋值给任意类型
// 这会破坏类型安全
var str: string = anything;
var num: number = anything;

console.log("字符串: " + str);
console.log("数字: " + num);

// any 类型的对象可以调用任意方法
// 编译器不会报错，但运行时可能出错
var obj: any = {};
obj.foo();  // 不会报错，但实际上 foo 方法不存在
obj.bar = "value";