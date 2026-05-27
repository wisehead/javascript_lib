// 定义类型
interface Animal {
    readonly name: string;
}

interface Dog extends Animal {
    readonly breed: string;
}

// 定义函数类型
type GetName = (animal: Animal) => string;
type GetDogBreed = (dog: Dog) => string;

// 正确的赋值
const getDogBreed: GetDogBreed = (dog) => dog.breed;

// 尝试赋值 - 在 strictFunctionTypes 下会报错
// 因为 AnimalConsumer (参数更宽泛) 不能赋值给 DogConsumer (参数更具体)
// 这是因为参数是逆变的

function printAnimalName(animal: Animal): string {
    return animal.name;
}

// 尝试将接受更宽泛类型的函数赋值给更具体类型
// const getSpecific: GetDogBreed = printAnimalName; // 错误！

console.log("犬种: " + getDogBreed({ name: "旺财", breed: "哈士奇" }));

export {};