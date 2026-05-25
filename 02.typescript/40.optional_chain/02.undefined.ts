// 定义一个用户类型，包含可能不存在的嵌套属性
interface User {
    name: string;
    address?: {
        city?: string;
        country?: {
            name: string;
        };
    };
}

// 定义一个不完整用户对象
// 只有 name 属性，没有 address 属性
var user1: User = {
    name: "RUNOOB"
    // address 属性不存在
};

// 使用可选链访问深层属性
// user1.address 为 undefined，所以 city 也是 undefined
var city = user1?.address?.city;

// 访问更深的嵌套属性
// 即使 country 也不存在，仍然返回 undefined 而不报错
var country = user1?.address?.country?.name;

console.log("城市: " + city);
console.log("国家: " + country);
