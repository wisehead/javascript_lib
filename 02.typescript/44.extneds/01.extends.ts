class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(this.name + " 发出声音");
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);  // 调用父类构造函数
        this.breed = breed;
    }

    speak(): void {
        console.log(this.name + " 汪汪汪!");
    }
}

var dog = new Dog("旺财", "金毛");
dog.speak();