// 使用 type 别名定义对象类型
// type 可以定义任何类型，不仅仅是对象
type PersonType = {
    name: string;
    age: number;
};

// 使用接口定义对象类型
// 接口可以声明合并，可以被类实现
interface PersonInterface {
    name: string;
    age: number;
}

// 两者都可以用来声明变量类型
var person1: PersonType = { name: "Alice", age: 25 };
var person2: PersonInterface = { name: "Bob", age: 30 };

console.log("PersonType: " + JSON.stringify(person1));
console.log("PersonInterface: " + JSON.stringify(person2));