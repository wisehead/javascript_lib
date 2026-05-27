// 深度只读类型 - 递归应用
type DeepReadonly52<T> = T extends Function
    ? T  // 函数保持原样
    : T extends object
        ? { readonly [P in keyof T]: DeepReadonly52<T[P]> }
        : T;

// 用户类型
interface User52 {
    name: string;
    profile: {
        email: string;
        address: {
            city: string;
            zip: string;
        };
    };
    friends: User52[];
}   

// 创建深度只读用户
const user52: DeepReadonly52<User52> = {
    name: "Alice",
    profile: {
        email: "alice@test.com",
        address: {
            city: "Beijing",
            zip: "100000"
        }
    },
    friends: []
};

// 尝试修改会报错
// user52.name = "Bob"; // 错误：name 是只读的
// user52.profile.address.city = "Shanghai"; // 错误：深层也是只读的

console.log("用户: " + user52.name);
console.log("城市: " + user52.profile.address.city);