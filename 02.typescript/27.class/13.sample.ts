// 接口定义
interface IPrintable {
    print(): void;
}

// 抽象类
abstract class Item {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    abstract getDetails(): string;
}

// 具体类
class Product extends Item implements IPrintable {
    private category: string;

    constructor(name: string, price: number, category: string) {
        super(name, price);
        this.category = category;
    }

    // 实现抽象方法
    getDetails(): string {
        return `产品: ${this.name}, 价格: ¥${this.price}, 类别: ${this.category}`;
    }

    // 实现接口方法
    print(): void {
        console.log(this.getDetails());
    }

    // 静态方法
    static create(name: string, price: number): Product {
        return new Product(name, price, "默认类别");
    }
}

// 使用
var product = Product.create("笔记本电脑", 5999);
product.print();

// 折扣方法
class DiscountedProduct extends Product {
    private discount: number;

    constructor(name: string, price: number, category: string, discount: number) {
        super(name, price, category);
        this.discount = discount;
    }

    getDetails(): string {
        var discountedPrice = this.price * (1 - this.discount / 100);
        return `产品: ${this.name}, 原价: ¥${this.price}, 折扣: ${this.discount}%, 现价: ¥${discountedPrice.toFixed(2)}`;
    }
}

var discountedProduct = new DiscountedProduct("手机", 2999, "电子产品", 20);
discountedProduct.print();