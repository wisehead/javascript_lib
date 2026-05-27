// 用户API服务
import { User } from '../types/user';

export const fetchUser = async (id: number): Promise<User> => {
    // 模拟API调用
    return {
        id,
        name: '测试用户',
        email: 'test@example.com',
        createdAt: new Date()
    };
};
