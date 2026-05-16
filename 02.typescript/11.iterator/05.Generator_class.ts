// 生成器类型：Generator<yield类型, return类型, next参数类型>
function* idGenerator(): Generator<number, void, unknown> {
    var i = 1;
    while (i <= 3) {
        yield i++;  // yield number 类型
    }
    // return void
}

var gen = idGenerator();
console.log(Array.from(gen));