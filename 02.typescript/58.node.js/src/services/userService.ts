// 导入类型定义
import { User, CreateUserDTO, ApiResponse } from "../types";

// 用户服务类
class UserService {
    // 用户列表（内存存储）
    private users: User[] = [];
    // 下一个用户 ID
    private nextId = 1;

    // 创建用户
    createUser(dto: CreateUserDTO): ApiResponse<User> {
        try {
            // 创建用户对象
            const user: User = {
                id: this.nextId++,
                name: dto.name,
                email: dto.email,
                createdAt: new Date()
            };
            this.users.push(user);
            return { success: true, data: user };
        } catch (error) {
            return { success: false, error: "创建用户失败" };
        }
    }

    // 获取单个用户
    getUser(id: number): ApiResponse<User> {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            return { success: false, error: "用户不存在" };
        }
        return { success: true, data: user };
    }

    // 获取所有用户
    getAllUsers(): ApiResponse<User[]> {
        return { success: true, data: this.users };
    }
}

// 导出单例
export default new UserService();