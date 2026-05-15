function factorial2(number: number): number {
    if (number <= 0) {         // 停止执行
        return 1; 
    } else {     
        return (number * factorial2(number - 1));     // 调用自身
    } 
};

console.log(factorial2(6));      // 输出 720
