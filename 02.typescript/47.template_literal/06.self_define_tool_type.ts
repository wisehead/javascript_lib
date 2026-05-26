// 添加前缀的工具类型
// T 是任意字符串，P 是要添加的前缀
type Prefix<T extends string, P extends string> = `${P}${Capitalize<T>}`;

// 添加后缀的工具类型
// T 是任意字符串，S 是要添加的后缀
type Suffix<T extends string, S extends string> = `${Capitalize<T>}${S}`;

// 使用自定义工具类型
type HandlerName = Prefix<"click", "on">;
type ButtonId = Suffix<"submit", "Btn">;

var handler47: HandlerName = "onClick";
var id: ButtonId = "SubmitBtn";

console.log("处理器: " + handler47);
console.log("ID: " + id);