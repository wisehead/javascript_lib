// 定义类型
class Animal {
    name: string = "动物";
}

class Dog extends Animal {
    breed: string = "田园犬";
}

// 逆变：输入类型可以向更具体的类型转换
// 接受 Animal 的函数可以赋值给接受 Dog 的函数
type DogConsumer = (dog: Dog) => void;
type AnimalConsumer = (animal: Animal) => void;

// 如果接受更宽泛类型的函数可以赋值给更具体类型的函数
// 那么当我们传入 Dog 时，函数可能会处理不了（缺少 Dog 特有的属性）
const consumeAnimal: AnimalConsumer = (animal) => {
    console.log("处理动物: " + animal.name);
};

const consumeDog: DogConsumer = consumeAnimal;  // 逆变：安全

// 运行
const dog = new Dog();
dog.breed = "哈士奇";
consumeDog(dog);

export {};