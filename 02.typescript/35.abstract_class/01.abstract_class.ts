// 使用 abstract 关键字声明抽象类
// 抽象类不能直接实例化，只能作为基类
abstract class Animal {
    // 动物的名字属性
    name: string;

    // 构造函数
    constructor(name: string) {
        this.name = name;
    }

    // 抽象方法：使用 abstract 修饰，没有方法体
    // 子类必须实现这个方法
    abstract speak(): void;

    // 具象方法：有具体实现的方法
    // 子类可以直接继承使用，不需要重写
    move(): void {
        console.log(this.name + " 在移动");
    }
}

// 尝试实例化抽象类会报错
// var animal = new Animal("动物"); // 错误：不能实例化抽象类

// 定义 Dog 类继承 Animal
class Dog extends Animal {
    // 子类必须实现父类的抽象方法 speak()
    speak(): void {
        console.log(this.name + " 汪汪汪!");
    }
}

// 创建 Dog 实例
var dog = new Dog("旺财");
dog.speak();  // 调用子类实现的方法
dog.move();   // 继承父类的具象方法

export {}
