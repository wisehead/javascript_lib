// 定义类型
interface Producer<T> {
    // 生产方法：返回值是协变的
    produce(): T;
}

interface Consumer<T> {
    // 消费方法：参数是逆变的
    consume(value: T): void;
}

// 具体实现
class DogProducer implements Producer<Dog> {
    produce(): Dog {
        return { name: "旺财", breed: "哈士奇" };
    }
}

class AnimalConsumer implements Consumer<Animal> {
    consume(animal: Animal): void {
        console.log("消费动物: " + animal.name);
    }
}

// Producer<Dog> 可以赋值给 Producer<Animal>（协变）
const animalProducer: Producer<Animal> = new DogProducer();

// Consumer<Animal> 可以赋值给 Consumer<Dog>（逆变）
const dogConsumer: Consumer<Dog> = new AnimalConsumer();

// 测试
const animal = animalProducer.produce();
console.log("生产: " + animal.name);

dogConsumer.consume({ name: "旺财", breed: "哈士奇" });