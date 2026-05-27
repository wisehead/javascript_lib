"use strict";
// 具体主题：消息中心
class MessageCenter {
    observers = [];
    message = "";
    // 添加观察者
    attach(observer) {
        this.observers.push(observer);
    }
    // 移除观察者
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    // 通知所有观察者
    notify() {
        for (const observer of this.observers) {
            observer.update(this.message);
        }
    }
    // 发布消息
    publish(message) {
        this.message = message;
        console.log("发布消息: " + message);
        this.notify();
    }
}
// 具体观察者：用户
class UserObserver {
    name;
    constructor(name) {
        this.name = name;
    }
    update(message) {
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
