// 定义人员基类
class Person {
    // 使用 protected 修饰 name，子类可以访问
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// 定义员工类，继承 Person
class Employee extends Person {
    // 部门是私有的
    private department: string;

    constructor(name: string, department: string) {
        super(name);  // 调用父类构造函数
        this.department = department;
    }

    // 自我介绍方法
    public introduce(): string {
        // 子类可以访问 protected 成员 name
        return "我是 " + this.name + "，在 " + this.department + " 工作";
    }
}

// 创建员工实例
var emp = new Employee("Alice", "技术部");

console.log(emp.introduce());

// 错误：在类外部不能访问 protected 成员
// console.log(emp.name); // 编译错误！