class Person {
    protected name: string;  // 受保护属性

    constructor(name: string) {
        this.name = name;
    }

    protected sayHello(): void {
        console.log("你好，我是 " + this.name);
    }
}

class Student extends Person {
    private grade: string;

    constructor(name: string, grade: string) {
        super(name);
        this.grade = grade;
    }

    public introduce(): void {
        // 子类可以访问受保护的属性和方法
        console.log("我是 " + this.name + "，年级: " + this.grade);
        this.sayHello();
    }
}

var student = new Student("Bob", "高三");
student.introduce();    // 可以访问

// console.log(student.name);  // 错误：'name' 是受保护属性
export {};
