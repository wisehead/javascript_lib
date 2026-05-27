"use strict";
// 具体产品：电子产品
class ElectronicProduct {
    name;
    price;
    warranty;
    constructor(name, price, warranty) {
        this.name = name;
        this.price = price;
        this.warranty = warranty;
    }
    getDescription() {
        return `${this.name} - ¥${this.price} (保修${this.warranty}年)`;
    }
}
// 具体产品：服装
class ClothingProduct {
    name;
    price;
    size;
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
    }
    getDescription() {
        return `${this.name} - ¥${this.price} (尺码: ${this.size})`;
    }
}
// 工厂类
class ProductFactory {
    // 泛型工厂方法
    static create(type, ...args) {
        return new type(...args);
    }
}
// 使用工厂创建产品
const laptop = ProductFactory.create(ElectronicProduct, "笔记本电脑", 5999, 2);
const shirt = ProductFactory.create(ClothingProduct, "T恤", 199, "L");
console.log(laptop.getDescription());
console.log(shirt.getDescription());
