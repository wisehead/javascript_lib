// 定义一个完整的用户对象（包含可能为空的地址信息）
var user4 = {
    name: "Alice",
    address: {
        city: "Beijing",
        country: "China"
    }
};

// 可选链 + 空值合并：当 city 为 null 或 undefined 时使用默认值
var userCity = user4?.address?.city ?? "未知城市";

console.log("城市: " + userCity);

// 对比：传统方式的复杂写法
var userCountry = user4 && user4.address && user4.address.country
    ? user4.address.country
    : "未知国家";

console.log("国家: " + userCountry);
