// 观察者接口
interface Observer {
    update(message: string): void;
}

// 主题接口
interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

// 具体主题：消息中心
class MessageCenter implements Subject {
    private observers: Observer[] = [];
    private message: string = "";

    // 添加观察者
    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    // 移除观察者
    detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    // 通知所有观察者
    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.message);
        }
    }

    // 发布消息
    publish(message: string): void {
        this.message = message;
        console.log("发布消息: " + message);
        this.notify();
    }
}

// 具体观察者：用户
class UserObserver implements Observer {
    constructor(public name: string) {}

    update(message: string): void {
        console.log(`[${this.name}] 收到消息: ${message}`);
    }
}

// 使用观察者模式
const center = new MessageCenter();

const user1 = new UserObserver("用户A");
const user2 = new UserObserver("用户B");

center.attach(user1);
center.attach(user2);

center.publish("新功能上线了！");