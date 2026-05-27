// 定义服务接口
interface Logger55 {
    log(message: string): void;
}

interface Storage55 {
    save(key: string, data: any): void;
    getItem(key: string): string | null;
}

// 具体服务实现
class ConsoleLogger implements Logger55 {
    log(message: string): void {
        console.log("[日志]: " + message);
    }
}

class LocalStorage implements Storage55 {
    private storage: { [key: string]: string } = {};

    save(key: string, data: any): void {
        console.log(`保存 ${key}: ${JSON.stringify(data)}`);
        // 在浏览器环境中使用 localStorage，否则使用内存存储
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(data));
        } else {
            // Node.js 环境下使用内存存储
            this.storage[key] = JSON.stringify(data);
        }
    }

    getItem(key: string): string | null {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem(key);
        } else {
            return this.storage[key] || null;
        }
    }
}

// 使用依赖注入的服务
class UserService {
    constructor(
        private logger: Logger55,
        private storage: Storage55
    ) {}

    createUser(name: string): void {
        const user = { name, createdAt: new Date() };
        this.logger.log("创建用户: " + name);
        this.storage.save("user", user);
    }
}

// 注入依赖
const logger = new ConsoleLogger();
const storage = new LocalStorage();
const userService = new UserService(logger, storage);

userService.createUser("Alice");