let nameSiteMapping = new Map();
 
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
 
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));     // 2
 
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));       // true
console.log(nameSiteMapping.has("Zhihu"));        // false
 
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);                // 3
 
// 删除 Runoob
console.log(nameSiteMapping.delete("Runoob"));    // true
console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
nameSiteMapping.clear();             // 清除 Map
console.log(nameSiteMapping);