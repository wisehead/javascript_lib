"use strict";
// 基础咖啡实现
class SimpleCoffee {
    getCost() {
        return 10;
    }
    getDescription() {
        return "咖啡";
    }
}
// 装饰器基类
class CoffeeDecorator {
    coffee;
    constructor(coffee) {
        this.coffee = coffee;
    }
    getCost() {
        return this.coffee.getCost();
    }
    getDescription() {
        return this.coffee.getDescription();
    }
}
// 牛奶装饰器
class MilkDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 2;
    }
    getDescription() {
        return this.coffee.getDescription() + ", 牛奶";
    }
}
// 糖装饰器
class SugarDecorator extends CoffeeDecorator {
    getCost() {
        return this.coffee.getCost() + 1;
    }
    getDescription() {
        return this.coffee.getDescription() + ", 糖";
    }
}
// 使用装饰器
let coffee = new SimpleCoffee();
console.log(coffee.getDescription() + " - ¥" + coffee.getCost());
coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription() + " - ¥" + coffee.getCost());
coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription() + " - ¥" + coffee.getCost());
