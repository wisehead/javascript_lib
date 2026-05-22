// 文件路径：runInNode.js
// 作用：模拟浏览器多个 <script> 顺序加载的效果，在 Node 中跑通示例
// 用法：node runInNode.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. 把第三方 JS 库的源码读出来，放进 Node 当前的"全局上下文"执行
//    这样 var Runoob 会成为真正的全局变量 globalThis.Runoob
const libCode = fs.readFileSync(path.join(__dirname, 'CalcThirdPartyJsLib.js'), 'utf8');
vm.runInThisContext(libCode, { filename: 'CalcThirdPartyJsLib.js' });

// 2. 再以同样方式加载编译后的业务脚本
const appCode = fs.readFileSync(path.join(__dirname, 'CalcTest.js'), 'utf8');
vm.runInThisContext(appCode, { filename: 'CalcTest.js' });
