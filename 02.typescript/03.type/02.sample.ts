// 定义枚举类型，用于表示用户的角色
enum Role {
  Admin,
  User,
  Guest,
}

// 使用 interface 定义用户的结构
interface User {
  id: number;               // number 类型，用于唯一标识用户
  username: string;         // string 类型，表示用户名
  isActive: boolean;        // boolean 类型，表示用户是否激活
  role: Role;               // enum 类型，用于表示用户角色
  hobbies: string[];        // array 类型，存储用户的兴趣爱好
  contactInfo: [string, number]; // tuple 类型，包含电话号码的元组，格式为：[区域码, 电话号码]
}

// 创建用户对象，符合 User 接口的结构
const user: User = {
  id: 1,
  username: "Alice",
  isActive: true,
  role: Role.User,
  hobbies: ["Reading", "Gaming"],
  contactInfo: ["+1", 123456789],
};

// 定义一个返回字符串的函数来获取用户信息
function getUserInfo(user: User): string {
  return `User ${user.username} is ${user.isActive ? "active" : "inactive"} with role ${Role[user.role]}`;
}

// 使用 void 类型定义一个函数，专门打印用户信息
function printUserInfo(user: User): void {
  console.log(getUserInfo(user));
}

// 定义一个 union 类型的函数参数，接受用户 ID（number）或用户名（string）
function findUser(query: number | string): User | undefined {
  // 使用 typeof 来判断 query 的类型
  if (typeof query === "number") {
    // 如果是数字，则根据 ID 查找用户
    return query === user.id ? user : undefined;
  } else if (typeof query === "string") {
    // 如果是字符串，则根据用户名查找用户
    return query === user.username ? user : undefined;
  }
  return undefined;
}

// 定义一个 never 类型的函数，用于处理程序的异常情况
function throwErrorExample(message: string): never {
  throw new Error(message);
}

// 使用 any 类型处理未知类型的数据
let unknownData: any = "This is a string";
unknownData = 42; // 重新赋值为数字，类型为 any

// 使用 unknown 类型处理不确定的数据，更加安全
let someData: unknown = "Possible data";
if (typeof someData === "string") {
  console.log(`Length of data: ${(someData as string).length}`);
}

// 调用各个函数并测试
printUserInfo(user);                    // 打印用户信息
console.log(findUser(1));               // 根据 ID 查找用户
console.log(findUser("Alice"));         // 根据用户名查找用户

// 使用 null 和 undefined 类型的变量
let emptyValue: null = null;
let uninitializedValue: undefined = undefined;