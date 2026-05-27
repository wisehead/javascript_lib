// 深度可选类型 - 递归应用
type DeepPartial<T> = T extends object
    ? { [P in keyof T]?: DeepPartial<T[P]> }
    : T;

// 配置类型
interface AppConfig {
    database: {
        host: string;
        port: number;
        credentials: {
            username: string;
            password: string;
        };
    };
    server: {
        port: number;
        ssl: boolean;
    };
}

// 使用深度可选，可以只提供部分配置
const partialConfig: DeepPartial<AppConfig> = {
    database: {
        host: "localhost"
        // port 和 credentials 可选
    }
    // server 可选
};

console.log("数据库主机: " + partialConfig.database?.host);