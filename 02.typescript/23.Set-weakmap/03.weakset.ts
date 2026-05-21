// WeakSet 只能存储对象，不能存储原始值
var weakSet = new WeakSet();

// 创建对象
var obj1 = { name: "Alice" };
var obj2 = { name: "Bob" };

// 添加对象到 WeakSet
weakSet.add(obj1);
weakSet.add(obj2);

// 检查是否包含
console.log("是否包含 obj1: " + weakSet.has(obj1));

// 移除引用后，对象可能被垃圾回收
weakSet.delete(obj1);
console.log("删除后是否包含 obj1: " + weakSet.has(obj1));