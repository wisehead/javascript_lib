"use strict";
// 创建 Promise
var promise = new Promise(function (resolve, reject) {
    var success = true;
    if (success) {
        resolve("操作成功");
    }
    else {
        reject("操作失败");
    }
});
promise.then(function (result) {
    console.log("成功: " + result);
})["catch"](function (error) {
    console.log("失败: " + error);
});
