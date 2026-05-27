// 不好的写法：使用 any
function processData(data: any): any {
    return data.value;
}

// 好的写法：使用 unknown 或具体类型
function processData2<T extends { value: string }>(data: T): string {
    return data.value;
}

// 如果真的不知道类型，使用 unknown
function parseJSON(json: string): unknown {
    return JSON.parse(json);
}

// 使用时进行类型检查
const data = parseJSON('{"key": "value"}');
if (typeof data === "object" && data !== null) {
    const obj = data as { key: string };
    console.log(obj.key);
}

// 更好的做法：使用泛型
function identity<T>(value: T): T {
    return value;
}

const result = identity("hello");
console.log("结果: " + result);