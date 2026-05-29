"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 用户服务类
class UserService {
    constructor() {
        // 用户列表（内存存储）
        this.users = [];
        // 下一个用户 ID
        this.nextId = 1;
    }
    // 创建用户
    createUser(dto) {
        try {
            // 创建用户对象
            const user = {
                id: this.nextId++,
                name: dto.name,
                email: dto.email,
                createdAt: new Date()
            };
            this.users.push(user);
            return { success: true, data: user };
        }
        catch (error) {
            return { success: false, error: "创建用户失败" };
        }
    }
    // 获取单个用户
    getUser(id) {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            return { success: false, error: "用户不存在" };
        }
        return { success: true, data: user };
    }
    // 获取所有用户
    getAllUsers() {
        return { success: true, data: this.users };
    }
}
// 导出单例
exports.default = new UserService();
