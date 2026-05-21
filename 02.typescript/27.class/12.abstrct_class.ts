// 抽象类
abstract class Animal {
    abstract makeSound(): void;  // 抽象方法，子类必须实现

    move(): void {
        console.log("动物在移动");
    }
}

// 具体类：继承抽象类
class Dog extends Animal {
    makeSound(): void {
        console.log("汪汪汪!");
    }
}

var dog = new Dog();
dog.move();
dog.makeSound();