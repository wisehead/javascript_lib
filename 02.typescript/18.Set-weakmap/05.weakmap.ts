// WeakMap 的键必须是对象
// 键类型为 object，值类型为 string
var weakMap = new WeakMap<object, string>();

// 创建对象作为键
var keyObj = { id: 1 };
// 设置键值对
weakMap.set(keyObj, "value1");

// 获取值
console.log("获取值: " + weakMap.get(keyObj));
console.log("是否包含: " + weakMap.has(keyObj));

// 删除键值对
weakMap.delete(keyObj);
console.log("删除后: " + weakMap.has(keyObj));