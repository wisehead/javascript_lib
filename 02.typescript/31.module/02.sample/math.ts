// 默认导出：一个模块只能有一个默认导出
export default function add(a: number, b: number): number {
    return a + b;
}

// 可以和其他导出混合使用
export function multiply(a: number, b: number): number {
    return a * b;
}