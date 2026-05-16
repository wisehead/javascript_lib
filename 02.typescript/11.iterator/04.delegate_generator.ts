// 第一个生成器
function* gen1() {
    yield 1;
    yield 2;
}

// 第二个生成器
function* gen2() {
    yield 3;
    yield 4;
}

// 组合生成器：使用 yield* 委托
function* combined() {
    yield* gen1();  // 委托给 gen1
    yield* gen2();  // 委托给 gen2
}

// 遍历组合生成器
for (var _i = 0, combined_1 = combined(); _i < combined_1.length; _i++) {
    var num = combined_1[_i];
    console.log("值: " + num);
}