"use strict";
// 具体服务实现
class ConsoleLogger {
    log(message) {
        console.log("[日志]: " + message);
    }
}
class LocalStorage {
    storage = {};
    save(key, data) {
        console.log(`保存 ${key}: ${JSON.stringify(data)}`);
        // 在浏览器环境中使用 localStorage，否则使用内存存储
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            // Node.js 环境下使用内存存储
            this.storage[key] = JSON.stringify(data);
        }
    }
    getItem(key) {
        if (typeof localStorage !== 'undefined') {
            return localStorage.getItem(key);
        }
        else {
            return this.storage[key] || null;
        }
    }
}
// 使用依赖注入的服务
class UserService {
    logger;
    storage;
    constructor(logger, storage) {
        this.logger = logger;
        this.storage = storage;
    }
    createUser(name) {
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
