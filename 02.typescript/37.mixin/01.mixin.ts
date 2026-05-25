// Constructor 类型：描述任意可实例化的类
type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin 函数：接收基类，返回扩展后的新类
function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        createdAt = new Date();
    };
}

// 基类
class User {
    constructor(public name: string) {}
}

// 混入后得到新类
const TimestampedUser = Timestamped(User);
const user = new TimestampedUser("Alice");

console.log(user.name);                        // Alice
console.log(user.createdAt instanceof Date);   // true

export {};