class User {
    name: string;
    age: number;

    // 构造函数重载
    constructor(name: string);
    constructor(name: string, age: number);
    constructor(name: any, age?: any) {
        this.name = name;
        this.age = age || 0;
    }
}

var user1 = new User("Alice");
var user2 = new User("Bob", 25);

console.log("用户1: " + JSON.stringify(user1));
console.log("用户2: " + JSON.stringify(user2));