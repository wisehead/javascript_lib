// JSON 值的递归类型定义
type JSONValue = string | number | boolean | null | JSONValue[] | { [key: string]: JSONValue };

// 定义配置对象
const config52: JSONValue = {
    "name": "my-app",
    "version": "1.0.0",
    "enabled": true,
    "settings": {
        "debug": false,
        "ports": [3000, 8080],
        "metadata": {
            "author": "Alice",
            "tags": ["web", "typescript"]
        }
    }
};

// 获取 JSON 值的函数
function getValue52(obj: JSONValue, path: string): JSONValue | undefined {
    const keys = path.split(".");
    let current: JSONValue | undefined = obj;

    for (const key of keys) {
        if (current && typeof current === "object" && !Array.isArray(current)) {
            current = (current as { [key: string]: JSONValue })[key];
        } else {
            return undefined;
        }
    }

    return current;
}

console.log("版本: " + getValue52(config52, "version"));
console.log("端口: " + getValue52(config52, "settings.ports"));
console.log("作者: " + getValue52(config52, "settings.metadata.author"));