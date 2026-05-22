// 定义抽象支付类
abstract class Payment {
    // 抽象方法：处理支付，子类必须实现
    abstract process(amount: number): boolean;

    // 具象方法：验证支付信息
    // 所有子类都可以使用这个方法
    validate(): void {
        console.log("验证支付信息");
    }
}

// 信用卡支付类
class CreditCardPayment extends Payment {
    // 信用卡号码
    cardNumber: string;

    // 构造函数
    constructor(cardNumber: string) {
        super();  // 调用父类构造函数
        this.cardNumber = cardNumber;
    }

    // 实现抽象方法：处理信用卡支付
    process(amount: number): boolean {
        console.log("处理信用卡支付: " + amount);
        return true;
    }
}

// PayPal 支付类
class PayPalPayment extends Payment {
    // PayPal 邮箱
    email: string;

    // 构造函数
    constructor(email: string) {
        super();
        this.email = email;
    }

    // 实现抽象方法：处理 PayPal 支付
    process(amount: number): boolean {
        console.log("处理 PayPal 支付: " + amount);
        return true;
    }
}

// 使用多态处理不同的支付方式
var payments: Payment[] = [
    new CreditCardPayment("1234"),
    new PayPalPayment("test@example.com")
];

// 遍历处理每种支付方式
for (var _i = 0, payments_1 = payments; _i < payments_1.length; _i++) {
    var payment = payments_1[_i];
    // 调用继承的验证方法
    payment.validate();
    // 调用子类的处理方法
    payment.process(100);
}