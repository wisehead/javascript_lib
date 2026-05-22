// 定义银行账户类
class BankAccount {
    // 使用 private 修饰余额，只能在类内部访问
    private balance: number;

    // 构造函数
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    // 存款方法
    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;  // 类内部可以访问 private 属性
            console.log("存款成功，当前余额: " + this.balance);
        }
    }

    // 获取余额
    public getBalance(): number {
        return this.balance;  // 类内部可以访问 private 属性
    }
}

// 创建账户实例
var account = new BankAccount(1000);

// 存款
account.deposit(500);

// 通过公共方法获取余额
console.log("余额: " + account.getBalance());

// 错误：在类外部不能直接访问 private 属性
// console.log(account.balance); // 编译错误！