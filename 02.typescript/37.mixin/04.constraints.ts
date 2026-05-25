type Constructor<T = {}> = new (...args: any[]) => T;

// 约束：基类必须有 id 和 name 属性
type WithIdAndName = Constructor<{ id: number; name: string }>;

function Printable<TBase extends WithIdAndName>(Base: TBase) {
    return class extends Base {
        print(): void {
            console.log(`[${this.id}] ${this.name}`);
        }
    };
}

class Item {
    constructor(public id: number, public name: string) {}
}

// 正确：Item 满足约束
const PrintableItem = Printable(Item);
const item = new PrintableItem(42, "Keyboard");
item.print();  // [42] Keyboard

// 错误示例（编译器会阻止）：
// class NoId { constructor(public name: string) {} }
// const Bad = Printable(NoId);  // 错误：NoId 缺少 id 属性