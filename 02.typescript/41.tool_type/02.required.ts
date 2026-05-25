// 定义配置接口，属性都是可选的
interface Config {
    // 服务器地址
    host?: string;
    // 端口号
    port?: number;
}

// Required：将所有可选属性变为必填
// 转换后的类型所有属性都是必填的
type RequiredConfig = Required<Config>;

// 使用 RequiredConfig 类型
// 必须提供所有属性
var config: RequiredConfig = { host: "localhost", port: 8080 };

console.log("配置: " + JSON.stringify(config));