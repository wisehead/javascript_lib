// 定义动物和狗的类型
class Animal {
    name: string = "动物";
}

class Dog extends Animal {
    breed: string = "田园犬";
}

// 协变：输出类型可以向更宽泛的类型转换
// 返回 Dog 的函数可以赋值给返回 Animal 的函数
type AnimalGetter = () => Animal;
type DogGetter = () => Dog;

// Dog 是 Animal 的子类，所以 DogGetter 可以赋值给 AnimalGetter
const getDog: DogGetter = () => new Dog();
const getAnimal: AnimalGetter = getDog;  // 协变：安全

// 运行
const animal: Animal = getAnimal();
console.log("动物名称: " + animal.name);

export {};