// 属性装饰器工厂
function format(formatString: string) {
    return function (
        target: any,           // 类的原型对象
        propertyKey: string     // 属性名称
    ) {
        // 在目标对象上存储元数据
        // 使用 propertyKey + "_format" 作为键名避免冲突
        Object.defineProperty(target, propertyKey + "_format", {
            value: formatString,
            writable: false,
            enumerable: false,
            configurable: true
        });
    };
}

class User {
    // 应用属性装饰器，指定日期格式
    @format("YYYY-MM-DD")
    birthDate: string;

    constructor(birthDate: string) {
        this.birthDate = birthDate;
    }
}

var user = new User("1990-01-01");
console.log("出生日期: " + user.birthDate);

// 访问存储的元数据
console.log("日期格式: " + (user as any).birthDate_format);