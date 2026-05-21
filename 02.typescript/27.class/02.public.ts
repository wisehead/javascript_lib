class Person {
    public name: string;    // 公有属性
    public age: number;     // 公有属性

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public introduce(): void {
        console.log("我是 " + this.name + "，今年 " + this.age + " 岁");
    }
}

var person = new Person("Alice", 25);
console.log("姓名: " + person.name);   // 可以访问
person.introduce();                    // 可以访问

export {};
