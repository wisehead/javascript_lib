// 单例模式：确保只有一个实例
class Singleton {
    // 存储单例实例
    private static instance: Singleton;
    private static _data: string = "";

    // 私有构造函数，防止外部实例化
    private constructor() {}

    // 获取单例实例的静态方法
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // 设置数据
    public setData(data: string): void {
        Singleton._data = data;
    }

    // 获取数据
    public getData(): string {
        return Singleton._data;
    }
}

// 测试单例模式
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// 验证是同一个实例
console.log("是同一实例: " + (instance1 === instance2));

instance1.setData("Hello Singleton");
console.log("数据: " + instance2.getData());