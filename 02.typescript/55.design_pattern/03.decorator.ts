// 基础咖啡接口
interface Coffee {
    getCost(): number;
    getDescription(): string;
}

// 基础咖啡实现
class SimpleCoffee implements Coffee {
    getCost(): number {
        return 10;
    }

    getDescription(): string {
        return "咖啡";
    }
}

// 装饰器基类
abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}

    getCost(): number {
        return this.coffee.getCost();
    }

    getDescription(): string {
        return this.coffee.getDescription();
    }
}

// 牛奶装饰器
class MilkDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffee.getCost() + 2;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ", 牛奶";
    }
}

// 糖装饰器
class SugarDecorator extends CoffeeDecorator {
    getCost(): number {
        return this.coffee.getCost() + 1;
    }

    getDescription(): string {
        return this.coffee.getDescription() + ", 糖";
    }
}

// 使用装饰器
let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription() + " - ¥" + coffee.getCost());

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription() + " - ¥" + coffee.getCost());

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription() + " - ¥" + coffee.getCost());