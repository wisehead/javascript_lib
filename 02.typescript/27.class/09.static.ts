class StaticMem {
    // 静态属性
    static num: number;

    // 静态方法
    static disp(): void {
        console.log("num 值为 " + StaticMem.num);
    }
}

// 直接通过类名访问静态成员
StaticMem.num = 12;
StaticMem.disp();