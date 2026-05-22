// 定义抽象类 Animal
abstract class Animal {
    // 抽象方法：所有动物都会发出声音
    abstract speak(): void;
}

// 定义 Cat 类继承 Animal
class Cat extends Animal {
    // 实现抽象方法
    speak(): void {
        console.log("喵喵喵!");
    }
}

// 定义 Dog 类继承 Animal
class Dog extends Animal {
    // 实现抽象方法
    speak(): void {
        console.log("汪汪汪!");
    }
}

// 定义函数参数类型为抽象类 Animal
// 这个函数可以接受任何 Animal 的子类实例
function makeSpeak(animal: Animal): void {
    animal.speak();
}

// 传入不同的子类实例，实现不同的行为（多态）
makeSpeak(new Cat());
makeSpeak(new Dog());

// 抽象类类型数组：可以存储不同子类实例
var animals: Animal[] = [new Cat(), new Dog()];