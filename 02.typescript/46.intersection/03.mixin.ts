// 定义构造函数类型
// 接受任意参数，返回一个对象
type Constructor = new (...args: any[]) => {};

// Mixin：添加时间戳功能
// 返回一个扩展了 Base 的新类
function Timestamped<T extends Constructor>(Base: T) {
    return class extends Base {
        timestamp = Date.now();
    };
}

// Mixin：添加序列化功能
// 返回一个扩展了 Base 的新类，包含 serialize 方法
function Serializable<T extends Constructor>(Base: T) {
    return class extends Base {
        serialize() {
            return JSON.stringify(this);
        }
    };
}

// 基础用户类
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

// 组合 Mixin
// 创建具有时间戳功能的用户类
var TimestampedUser = Timestamped(User);
// 创建具有序列化功能的用户类
var SerializableUser = Serializable(User);
// 组合两个 Mixin
var FullUser = Serializable(Timestamped(User));

// 创建实例并测试
var user = new FullUser("Alice");
console.log("时间戳: " + user.timestamp);
console.log("序列化: " + user.serialize());

export {};