let nameSiteMapping2 = new Map();
 
nameSiteMapping2.set("Google", 1);
nameSiteMapping2.set("Runoob", 2);
nameSiteMapping2.set("Taobao", 3);
 
// 迭代 Map 中的 key
for (let key of nameSiteMapping2.keys()) {
    console.log(key);                  
}
 
// 迭代 Map 中的 value
for (let value of nameSiteMapping2.values()) {
    console.log(value);                 
}
 
// 迭代 Map 中的 key => value
for (let entry of nameSiteMapping2.entries()) {
    console.log(entry[0], entry[1]);   
}
 
// 使用对象解析
for (let [key, value] of nameSiteMapping2) {
    console.log(key, value);            
}