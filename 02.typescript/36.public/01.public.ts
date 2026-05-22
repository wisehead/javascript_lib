// 定义动物类
class Animal {
    // 使用 public 修饰 name 属性（可以省略，默认就是 public）
    public name: string;

    // 构造函数
    public constructor(name: string) {
        this.name = name;
    }

    // 公开的说话方法
    public speak(): void {
        console.log(this.name + " 发出声音");
    }
}

// 创建实例
var animal = new Animal("动物");

// 在类外部访问 public 属性
console.log(animal.name);

// 在类外部调用 public 方法
animal.speak();