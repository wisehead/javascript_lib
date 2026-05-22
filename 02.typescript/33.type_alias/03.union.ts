// 联合类型别名：定义状态的可能值
// Status 只能是这三个字符串字面量之一
type Status = "pending" | "success" | "error";

// 联合类型别名：定义多种可能的返回类型
// Result 可以是字符串、数字或布尔值
type Result = string | number | boolean;

// 使用联合类型别名
function getStatus(status: Status): void {
    console.log("状态: " + status);
}

getStatus("success");
getStatus("error");

// 使用 Result 类型
var result: Result = "hello";
result = 42;
console.log("结果: " + result);

export { };
