// 建造者接口
interface Builder<T> {
    build(): T;
}

// 复杂对象：用户配置
interface UserConfig {
    name: string;
    email: string;
    age?: number;
    role?: string;
    theme?: string;
}

// 用户配置建造者
class UserConfigBuilder implements Builder<UserConfig> {
    private config: Partial<UserConfig> = {};

    setName(name: string): this {
        this.config.name = name;
        return this;
    }

    setEmail(email: string): this {
        this.config.email = email;
        return this;
    }

    setAge(age: number): this {
        this.config.age = age;
        return this;
    }

    setRole(role: string): this {
        this.config.role = role;
        return this;
    }

    setTheme(theme: string): this {
        this.config.theme = theme;
        return this;
    }

    build(): UserConfig {
        if (!this.config.name || !this.config.email) {
            throw new Error("Name and email are required");
        }
        return this.config as UserConfig;
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