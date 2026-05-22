// // 动态导入 - 懒加载
// // import() 返回一个 Promise
// async function loadMath() {
//     // 动态导入模块，只有执行到这里才会加载
//     var math = await import("./math");

//     // math.default 是默认导出的函数
//     console.log("动态加法: " + math.default(1, 2));
// }

// // 调用懒加载函数
// loadMath();

// // 条件导入：根据条件动态加载不同模块
// async function loadFeature(enable: boolean) {
//     if (enable) {
//         // 只有条件满足时才加载模块
//         var feature = await import("./feature");
//         feature.run();
//     }
// }

// // 根据条件加载
// loadFeature(true);