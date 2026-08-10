// 让本文件成为模块，避免 name/obj 等变量与全局作用域声明冲突
export {};

// # TypeScript console.log 格式化打印示例
// > TS 的 `console.log` 完全复用浏览器 / Node.js 的 `console` API，语法和 JS 一致。
//
// ## 1. 占位符格式化（C语言风格）
// 支持占位符：
// - `%s` 字符串
// - `%d` / `%i` 整数
// - `%f` 浮点数
// - `%o` 对象（展开查看）
// - `%O` 对象（格式化打印）
//
// ```typescript
const name = "张三";
const age = 28;
const score = 95.5;
const user = { id: 1, name: "test" };

console.log("姓名:%s, 年龄:%d, 分数:%f", name, age, score);
// 输出：姓名:张三, 年龄:28, 分数:95.500000

console.log("用户对象 %O", user);
// 输出格式化对象
// ```
//
// ## 2. ES6 模板字符串（最常用✅）
// ```typescript
const id = 1001;
const title = "订单";
console.log(`id=${id}, title=${title}`);
// id=1001, title=订单
// ```
//
// ## 3. 直接多参数打印（逗号分隔，自动空格，对象不会转字符串）
// > 优点：对象可以在控制台点击展开，不会打印成 `[object Object]`
// ```typescript
const u = { uid: 123, username: "demo" };
console.log("用户信息：", u);
// 用户信息： { uid: 123, username: 'demo' }
// ```
//
// ❌ 不要这样：`console.log("user:" + u)` → 得到 `user:[object Object]`
//
// ## 4. console.dir 专门打印对象
// ```typescript
const obj = { a: 1, b: { c: 2 } };
console.dir(obj);
// ```
//
// ## 5. 表格打印 console.table ✨调试数组/对象神器
// ```typescript
const list = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];
console.table(list);
// 控制台输出表格形式
// ```
//
// ## 6. 分组输出 console.group / groupEnd
// 适合打印一组相关日志，支持折叠
// ```typescript
console.group("==== 用户详情 ====");
console.log("id:", 100);
console.log("name:", "lisi");
console.groupEnd();
// ```
//
// ## 7. 不同日志级别
// ```typescript
console.log("普通日志");
console.info("信息");
console.warn("⚠️警告");
console.error("❌错误");
// ```
//
// ## 8. 简单颜色样式（浏览器端，Node部分支持）
// `%c` 加CSS样式
// ```typescript
console.log("%c 红色文字 ", "color:red;font-size:14px;");
console.log("%c 绿色背景 ", "background:green;color:white;");
// ```
//
// ## 9. 实际业务综合示例
// ```typescript
interface Order {
  orderId: number;
  amount: number;
  status: string;
}

const order: Order = { orderId: 20260810, amount: 99.5, status: "paid" };

// 模板字符串
console.log(`[订单] orderId=${order.orderId}, amount=${order.amount}, status=${order.status}`);

// 同时输出文本+可展开对象
console.log("[订单详情] data:", order);

// 表格打印
console.table([order]);
// ```
//
// ### 小提示
// 1. **Node.js环境：`%c` 颜色样式大部分不生效；浏览器控制台生效**
// 2. 打印对象优先用逗号分隔传参，不要拼接字符串；否则对象会变成 `[object Object]`
// 3. 调试数组列表优先使用 `console.table`，可读性远好于普通 log。
//
// 如果你需要，我可以给你一个简单封装的带时间戳的日志工具函数。
