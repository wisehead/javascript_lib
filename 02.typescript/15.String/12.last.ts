/*
### 方式1：`str.at(-1)`（推荐，ES2022+，TS支持）
*/
{
    const s = "hello";
    const last = s.at(-1); // 'o'
    // 类型：string | undefined，空字符串返回 undefined
}

/*
### 方式2：下标 `str[str.length - 1]`（兼容所有环境）
*/
{
    const s = "hello";
    const last = s[s.length - 1]; // 'o'
    // 类型：string，空字符串返回 ''
}

/*
### 方式3：slice
*/
{
    const s = "hello";
    const last = s.slice(-1); // 'o'
    // 空字符串返回 ''
}

/*
### 类型小提示

如果你想要**非空安全写法**：
*/
{
    const str = "";
    str.at(-1) // undefined
    str[str.length - 1] // ''
    str.slice(-1) // ''

    const last = str.at(-1) ?? '';
}

// 需要我顺便给你一个取倒数第N个字符的工具函数吗？

export {};
