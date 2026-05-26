// Mock 函数：创建模拟函数
const mockCallback = jest.fn(x => x * 2);

// 使用模拟函数
[1, 2, 3].forEach(mockCallback);

console.log(mockCallback.mock.calls); // 输出调用参数
// 验证函数被调用了 3 次
expect(mockCallback).toHaveBeenCalledTimes(3);
// 验证函数被调用时的参数
expect(mockCallback).toHaveBeenCalledWith(2);

// Mock 模块：模拟整个模块
jest.mock("./api", () => ({
    fetchUser: jest.fn(() => Promise.resolve({ id: 1, name: "Alice" }))
}));