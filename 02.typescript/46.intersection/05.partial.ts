// 映射类型：将所有属性变为可选
// 遍历 T 的所有属性，添加 ? 使其可选
type Partial46<T> = { [P in keyof T]?: T[P] };

// 映射类型：将所有属性变为必填
// 遍历 T 的所有属性，移除 ? 使其必填
type Required46<T> = { [P in keyof T]-?: T[P] };

// 映射类型：将所有属性变为只读
// 遍历 T 的所有属性，添加 readonly
type Readonly46<T> = { readonly [P in keyof T]: T[P] };

// 定义配置接口
interface Config {
    host: string;
    port: number;
}

// 使用工具类型
var partialConfig: Partial46<Config> = { host: "localhost" };
var requiredConfig: Required46<Config> = { host: "localhost", port: 8080 };
var readonlyConfig: Readonly46<Config> = { host: "localhost", port: 8080 };

console.log("部分: " + JSON.stringify(partialConfig));
console.log("必填: " + JSON.stringify(requiredConfig));
console.log("只读: " + JSON.stringify(readonlyConfig));