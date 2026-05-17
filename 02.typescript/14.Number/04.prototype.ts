interface Employee {
    email: string;
}

class Employee {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

// 添加原型属性
Employee.prototype.email = "admin@runoob.com";

var emp = new Employee(123, "admin");

console.log("员工号: " + emp.id);
console.log("员工姓名: " + emp.name);
console.log("员工邮箱: " + emp.email);
