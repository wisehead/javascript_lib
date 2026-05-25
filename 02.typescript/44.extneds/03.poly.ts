class Animal44 {
    name: string;
    constructor(name: string) { this.name = name; }
    speak(): void {
        console.log(this.name + " 发出声音");
    }
}

class Cat extends Animal44 {
    speak(): void {
        console.log(this.name + " 喵喵喵!");
    }
}

class Dog44 extends Animal44 {
    speak(): void {
        console.log(this.name + " 汪汪汪!");
    }
}

// 多态：数组中存储不同子类的实例
var animals: Animal44[] = [
    new Cat("小白"),
    new Dog44("旺财"),
    new Animal44("动物")
];

// 调用同一方法，不同子类有不同实现
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    animal.speak();
}