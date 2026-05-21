class Person {
    public name: string;
    private secret: string;  // 私有属性，外部无法直接访问

    constructor(name: string, secret: string) {
        this.name = name;
        this.secret = secret;
    }

    // 公有方法可以访问私有属性
    public revealSecret(): void {
        console.log("秘密: " + this.secret);
    }
}

var person = new Person("Alice", "我喜欢编程");

console.log("姓名: " + person.name);   // 可以访问
// console.log(person.secret);        // 错误：'secret' 是私有属性

person.revealSecret();                 // 通过公有方法访问私有属性

export {};
