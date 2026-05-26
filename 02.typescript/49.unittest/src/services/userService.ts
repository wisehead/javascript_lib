// 用户类型
export interface User {
    id: number;
    name: string;
}

// 用户服务类
export class UserService {
    private users: User[] = [];
    private nextId = 1;

    // 创建用户
    createUser(name: string): User {
        const user = { id: this.nextId++, name };
        this.users.push(user);
        return user;
    }

    // 获取用户
    getUser(id: number): User | undefined {
        return this.users.find(u => u.id === id);
    }

    // 获取所有用户
    getAllUsers(): User[] {
        return [...this.users];
    }
}