// 父类
class PrinterClass {
    doPrint(): void {
        console.log("父类的 doPrint() 方法");
    }
}

// 子类：重写父类方法
class StringPrinter extends PrinterClass {
    doPrint(): void {
        // 调用父类的方法
        super.doPrint();

        // 子类自己的逻辑
        console.log("子类的 doPrint() 方法");
    }
}

var obj = new StringPrinter();
obj.doPrint();