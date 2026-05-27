// 定义类型
class Animal {
    name: string = "动物";
}

class Dog extends Animal {
    breed: string = "狗";
}

// 泛型容器类
class Cage<T> {
    animal: T;

    constructor(animal: T) {
        this.animal = animal;
    }
}

// 协变：可以子类型容器赋值给父类型容器
const dogCage = new Cage(new Dog());
const animalCage: Cage<Animal> = dogCage;  // 协变：安全

// animalCage 现在可以安全地当作包含动物的笼子使用
console.log("动物名称: " + animalCage.animal.name);

export {};