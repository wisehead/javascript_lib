// 定义 Dog 类
class Dog {
    // 狗的叫声方法
    bark(): void {
        console.log("汪汪汪!");
    }
}

// 定义 Cat 类
class Cat {
    // 猫的叫声方法
    meow(): void {
        console.log("喵喵喵!");
    }
}

// 接收联合类型的函数
function makeSound(animal: Dog | Cat): void {
    // 使用 instanceof 检查 animal 是 Dog 还是 Cat
    // 在 if 条件为 true 时，TypeScript 将 animal 缩小为 Dog 类型
    if (animal instanceof Dog) {
        // 此时可以调用 Dog 特有的方法
        animal.bark();
    } else {
        // else 分支中，TypeScript 将 animal 缩小为 Cat 类型
        animal.meow();
    }
}

// 测试调用
makeSound(new Dog());  // 创建 Dog 实例并调用
makeSound(new Cat());  // 创建 Cat 实例并调用