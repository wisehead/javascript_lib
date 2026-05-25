// 装饰器工厂：接收配置参数，返回装饰器函数
function color(colorCode: string) {
    // colorCode 是 ANSI 转义序列的颜色代码
    // 例如：34 = 蓝色，31 = 红色，32 = 绿色
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        // 保存原始方法
        var originalMethod = descriptor.value;

        // 重写方法，添加颜色
        descriptor.value = function (...args: any[]) {
            // 调用原始方法获取返回值
            var result = originalMethod.apply(this, args);

            // 如果在终端环境，给输出添加颜色
            // ANSI 转义序列格式：\x1b[颜色码m 内容 \x1b[0m
            return "\x1b[" + colorCode + "m" + result + "\x1b[0m";
        };
    };
}

class Logger {
    // 使用装饰器工厂，传入蓝色代码 34
    @color("34")
    log(message: string): string {
        return message;
    }

    @color("31")
    error(message: string): string {
        return message;
    }

    @color("32")
    success(message: string): string {
        return message;
    }
}

var logger = new Logger();
console.log(logger.log("这是蓝色日志"));
console.log(logger.error("这是红色错误"));
console.log(logger.success("这是绿色成功"));