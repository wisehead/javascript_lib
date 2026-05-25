// 日志装饰器
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    var originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log("调用方法: " + propertyKey + "，参数: " + JSON.stringify(args));
        var result = originalMethod.apply(this, args);
        console.log("方法返回: " + JSON.stringify(result));
        return result;
    };
}

class MathService {
    @log
    add(a: number, b: number): number {
        return a + b;
    }

    @log
    multiply(a: number, b: number): number {
        return a * b;
    }
}

var math = new MathService();
console.log("计算结果: " + math.add(5, 3));