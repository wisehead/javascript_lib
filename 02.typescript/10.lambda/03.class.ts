// 定义计数器类
class Counter {
    // 计数器的当前值
    count: number = 0;

    // 使用箭头函数作为类属性
    // 每次创建实例时，都会创建一个新的函数
    // this 指向实例
    increment = () => {
        this.count++;
        console.log("当前计数: " + this.count);
    };

    // 普通方法
    decrement() {
        this.count--;
        console.log("当前计数: " + this.count);
    }
}

// 创建计数器实例
var counter = new Counter();

// 调用箭头函数方法
counter.increment();
counter.increment();

// 调用普通方法
counter.decrement();