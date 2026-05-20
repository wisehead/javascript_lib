// 使用 Symbol.for 方法创建/获取全局 Symbol
// 如果 key 不存在，会创建新的；如果已存在，返回已有的
var globalSym1 = Symbol.for("global");
var globalSym2 = Symbol.for("global");

// 相同 key 的 Symbol 是相等的
console.log("全局 Symbol 相等: " + (globalSym1 === globalSym2));

// 获取 Symbol 的 key
console.log("Symbol key: " + Symbol.keyFor(globalSym1));