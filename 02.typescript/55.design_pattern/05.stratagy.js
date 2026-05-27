"use strict";
// 微信支付策略
class WechatPayStrategy {
    pay(amount) {
        console.log(`使用微信支付 ¥${amount}`);
    }
}
// 支付宝策略
class AlipayStrategy {
    pay(amount) {
        console.log(`使用支付宝支付 ¥${amount}`);
    }
}
// 银行卡策略
class CardPayStrategy {
    pay(amount) {
        console.log(`使用银行卡支付 ¥${amount}`);
    }
}
// 支付上下文
class PaymentContext {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    // 设置支付策略
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    // 执行支付
    pay(amount) {
        this.strategy.pay(amount);
    }
}
// 使用策略模式
const context = new PaymentContext(new WechatPayStrategy());
context.pay(100);
context.setStrategy(new AlipayStrategy());
context.pay(200);
context.setStrategy(new CardPayStrategy());
context.pay(300);
