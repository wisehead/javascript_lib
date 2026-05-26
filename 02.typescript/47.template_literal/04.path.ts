// 定义 HTTP 方法类型
type HttpMethod = "get" | "post" | "put" | "delete";

// 定义路径格式
type ApiEndpoint = `/${string}`;  // 以斜杠开头的字符串

// 组合成完整的 API 路径类型
type ApiPath = `${HttpMethod}${ApiEndpoint}`;

// 只能赋值符合格式的路径
var getUsers: ApiPath = "get/users";
var createUser: ApiPath = "post/users";

console.log("路径: " + getUsers);
console.log("路径: " + createUser);
