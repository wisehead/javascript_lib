// 定义配置类型
interface Config {
    apiUrl: string;
    timeout: number;
    retry: boolean;
}

// 只能获取存在的键
function getConfigValue<T, K extends keyof T>(
    config: T,
    key: K
): T[K] {
    return config[key];
}

// 定义配置
const config: Config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retry: true
};

// 正确：键存在
const url: string = getConfigValue(config, "apiUrl");
const timeoutVal: number = getConfigValue(config, "timeout");

// 错误：键不存在（TypeScript 会报错）
// const invalid = getConfigValue(config, "unknown");

console.log("API URL: " + url);
console.log("Timeout: " + timeoutVal);