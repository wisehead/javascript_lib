// 定义接口
interface ILoan {
    interest: number;  // 利率
}

// 类实现接口
class AgriLoan implements ILoan {
    interest: number;
    rebate: number;    // 回扣

    constructor(interest: number, rebate: number) {
        this.interest = interest;
        this.rebate = rebate;
    }
}

var loan = new AgriLoan(10, 1);
console.log("利率: " + loan.interest + "%，回扣: " + loan.rebate);