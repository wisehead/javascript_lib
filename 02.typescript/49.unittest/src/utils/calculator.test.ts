import { Calculator } from "./calculator";

// 测试套件：Calculator 类的测试
describe("Calculator", () => {
    let calculator: Calculator;

    // 每个测试前创建新的 Calculator 实例
    beforeEach(() => {
        calculator = new Calculator();
    });

    // 加法测试
    describe("add", () => {
        it("should add two numbers", () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        it("should handle negative numbers", () => {
            expect(calculator.add(-1, 1)).toBe(0);
        });
    });

    // 除法测试
    describe("divide", () => {
        it("should divide two numbers", () => {
            expect(calculator.divide(10, 2)).toBe(5);
        });

        it("should throw error when dividing by zero", () => {
            // 期望抛出错误
            expect(() => calculator.divide(10, 0)).toThrow();
        });
    });
});