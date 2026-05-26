// 定义人员类型
// 包含姓名和年龄
interface Person {
    name: string;
    age: number;
}

// 定义工作者类型
// 包含公司名称和薪资
interface Job {
    company: string;
    salary: number;
}

// 使用交叉类型合并两个接口
// Employee 类型同时具有 Person 和 Job 的所有属性
type Employee = Person & Job;

// 创建同时具有两个类型特性的对象
var employee46: Employee = {
    name: "Alice",
    age: 25,
    company: "Google",
    salary: 100000
};

console.log("员工: " + JSON.stringify(employee46));