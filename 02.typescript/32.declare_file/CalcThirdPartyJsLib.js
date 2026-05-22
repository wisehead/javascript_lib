// 文件路径：CalcThirdPartyJsLib.js
// 这是一个模拟的第三方 JavaScript 库

// 声明 Runoob 命名空间变量（如果不存在则创建空对象）
var Runoob;

// 使用立即执行函数（IIFE）封装代码，避免内部变量泄漏到全局作用域
(function(Runoob) {
    // Calc 构造函数，用于创建计算器对象
    var Calc = (function () {
        function Calc() {
            // 当前无需初始化参数，保留构造函数以便后续扩展
        }
    })

    // doSum 方法：计算从 0 到 limit 的所有整数之和
    // limit（必填）：累加的上限值，包含该值本身
    // 示例：limit=10 时，计算 0+1+2+...+10 = 55
    Calc.prototype.doSum = function (limit) {
        var sum = 0;

        for (var i = 0; i <= limit; i++) {
            sum = sum + i;
        }
        return sum;
    }

    // 将 Calc 构造函数挂载到 Runoob 命名空间下
    // 这样外部就可以通过 new Runoob.Calc() 来创建实例
    Runoob.Calc = Calc;
    return Calc;
})(Runoob || (Runoob = {}));

// 库内部自测代码
var test = new Runoob.Calc();