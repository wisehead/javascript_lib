type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin 1：添加时间戳
function Timestamped<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        createdAt = new Date();
    };
}

// Mixin 2：添加序列化
function Serializable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        serialize(): string {
            return JSON.stringify(this);
        }
    };
}

// Mixin 3：添加日志（依赖 serialize 方法）
function Loggable<TBase extends Constructor<{ serialize(): string }>>(Base: TBase) {
    return class extends Base {
        log(): void {
            console.log("[LOG]", this.serialize());
        }
    };
}

class Product {
    constructor(public name: string, public price: number) {}
}

// 依次叠加三个 Mixin
const AdvancedProduct = Loggable(Serializable(Timestamped(Product)));

const p = new AdvancedProduct("Phone", 999);
p.log();
console.log(p.createdAt instanceof Date);  // true

export {};