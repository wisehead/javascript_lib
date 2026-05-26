// 虚拟API模块
export const fetchUser = async (): Promise<{id: number, name: string}> => {
    // 实际实现，但在测试中会被模拟
    return { id: 1, name: "Real User" };
};