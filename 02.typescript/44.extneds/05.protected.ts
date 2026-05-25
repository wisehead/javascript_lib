class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public introduce(): string {
        // 可以访问 protected 成员
        return "我是 " + this.name + "，在 " + this.department + " 工作";
    }
}

var emp = new Employee("Alice", "技术部");
console.log(emp.introduce());

// console.log(emp.name); // 错误：protected 外部不可访问