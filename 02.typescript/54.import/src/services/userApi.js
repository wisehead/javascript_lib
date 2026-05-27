export const fetchUser = async (id) => {
    // 模拟API调用
    return {
        id,
        name: '测试用户',
        email: 'test@example.com',
        createdAt: new Date()
    };
};
