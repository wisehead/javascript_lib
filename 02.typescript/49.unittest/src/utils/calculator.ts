// 计算器类
export class Calculator {
    // 加法
    add(a: number, b: number): number {
        return a + b;
    }

    // 减法
    subtract(a: number, b: number): number {
        return a - b;
    }

    // 乘法
    multiply(a: number, b: number): number {
        return a * b;
    }

    // 除法
    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}