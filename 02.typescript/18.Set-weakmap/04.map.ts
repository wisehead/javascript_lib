// 创建 Map，键类型为 string，值类型为 number
var map = new Map<string, number>();

// 设置键值对
map.set("one", 1);
map.set("two", 2);
map.set("three", 3);

// 获取值
console.log("获取 two: " + map.get("two"));
console.log("Map 大小: " + map.size);
console.log("是否包含 three: " + map.has("three"));

// 遍历 Map
map.forEach(function(value, key) {
    console.log(key + ": " + value);
});

// 转换为数组
console.log("转换为数组: " + Array.from(map.entries()));