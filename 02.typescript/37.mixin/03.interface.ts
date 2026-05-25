type Constructor<T = {}> = new (...args: any[]) => T;

// 定义能力接口
interface ISerializable {
    serialize(): string;
}

interface ICloneable<T> {
    clone(): T;
}

// Mixin 实现接口
function Serializable<TBase extends Constructor>(Base: TBase) {
    return class extends Base implements ISerializable {
        serialize(): string {
            return JSON.stringify(this);
        }
    };
}

function Cloneable<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        clone() {
            return Object.assign(
                Object.create(Object.getPrototypeOf(this)),
                this
            );
        }
    };
}

class Article {
    constructor(public title: string, public content: string) {}
}

const RichArticle = Cloneable(Serializable(Article));

const a1 = new RichArticle("TypeScript 入门", "正文内容...");
const a2 = a1.clone();
a2.title = "TypeScript 进阶";

console.log(a1.serialize());
// {"title":"TypeScript 入门","content":"正文内容..."}

console.log(a2.serialize());
// {"title":"TypeScript 进阶","content":"正文内容..."}

console.log(a1.title === a2.title);  // false（克隆后独立修改）

export {};