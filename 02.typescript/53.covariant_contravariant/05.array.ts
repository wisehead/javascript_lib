// 定义类型
class Animal {
    name: string = "动物";
}

class Dog extends Animal {
    breed: string = "狗";
}

// 数组协变
const dogs: Dog[] = [
    { name: "旺财", breed: "哈士奇" },
    { name: "小白", breed: "萨摩耶" }
];

// Dog[] 可以赋值给 Animal[]
const animals: Animal[] = dogs;  // 协变：安全

// 问题：虽然类型上安全，但实际上可以添加其他动物
// animals.push({ name: "猫咪", breed: "猫" }); // 运行时可能出问题！

console.log("动物数量: " + animals.length);