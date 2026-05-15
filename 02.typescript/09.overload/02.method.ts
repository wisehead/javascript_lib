class Calculator {
    // 重载签名
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: number, b: string): string;
    add(a: any, b: any): any {
        return a + b;
    }
}

var calc = new Calculator();
console.log("数字: " + calc.add(1, 2));
console.log("字符串: " + calc.add("Hello", "World"));
console.log("混合: " + calc.add(5, " apples"));