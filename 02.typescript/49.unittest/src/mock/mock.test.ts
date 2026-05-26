// Mock 函数示例
describe('Mock Functions', () => {
    it('should demonstrate mock function usage', () => {
        const mockCallback = jest.fn(x => x * 2);

        // 使用模拟函数
        [1, 2, 3].forEach(mockCallback);

        console.log(mockCallback.mock.calls); // 输出调用参数
        
        // 验证函数被调用了 3 次
        expect(mockCallback).toHaveBeenCalledTimes(3);
        
        // 验证函数被调用时的参数 (forEach会传递 (element, index, array))
        expect(mockCallback).toHaveBeenNthCalledWith(1, 1, 0, [1, 2, 3]); // 第一次调用
        expect(mockCallback).toHaveBeenNthCalledWith(2, 2, 1, [1, 2, 3]); // 第二次调用
        expect(mockCallback).toHaveBeenNthCalledWith(3, 3, 2, [1, 2, 3]); // 第三次调用
    });
});

// Mock 模块示例
describe('Mock Modules', () => {
    it('should demonstrate module mocking', () => {
        // 假设我们要模拟的模块路径
        // jest.mock("./api", () => ({
        //     fetchUser: jest.fn(() => Promise.resolve({ id: 1, name: "Alice" }))
        // }));
    });
});
