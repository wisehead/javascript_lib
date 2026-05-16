// 生成器函数：使用 function* 语法
function* numberGenerator() {
    yield 1;  // 暂停并返回 1
    yield 2;  // 暂停并返回 2
    yield 3;  // 暂停并返回 3
}

// 创建生成器实例
var gen = numberGenerator();

// 每次调用 next() 都会执行到下一个 yield
console.log("第一个: " + gen.next().value);
console.log("第二个: " + gen.next().value);
console.log("第三个: " + gen.next().value);
console.log("完成: " + gen.next().done);