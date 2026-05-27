"use strict";
// 用户配置建造者
class UserConfigBuilder {
    config = {};
    setName(name) {
        this.config.name = name;
        return this;
    }
    setEmail(email) {
        this.config.email = email;
        return this;
    }
    setAge(age) {
        this.config.age = age;
        return this;
    }
    setRole(role) {
        this.config.role = role;
        return this;
    }
    setTheme(theme) {
        this.config.theme = theme;
        return this;
    }
    build() {
        if (!this.config.name || !this.config.email) {
            throw new Error("Name and email are required");
        }
        return this.config;
    }
}
// 使用建造者
const builder = new UserConfigBuilder();
const config = builder
    .setName("Alice")
    .setEmail("alice@example.com")
    .setAge(25)
    .setRole("admin")
    .setTheme("dark")
    .build();
console.log("用户配置:", JSON.stringify(config, null, 2));
