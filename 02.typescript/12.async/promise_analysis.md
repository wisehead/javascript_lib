# TypeScript Promise 示例分析

## 代码结构概述

该示例演示了TypeScript中Promise的基本用法，包含以下组件：

### 1. Promise 创建

```typescript
// 创建 Promise
var promise = new Promise(function(resolve, reject) {
    var success = true;
    if (success) {
        resolve("操作成功");
    } else {
        reject("操作失败");
    }
});
```

这部分代码创建了一个新的Promise实例，传入一个执行器函数，该函数接收resolve和reject两个回调函数作为参数。

### 2. Promise 处理

```typescript
promise.then(function(result) {
    console.log("成功: " + result);
})["catch"](function(error) {
    console.log("失败: " + error);
});
```

这部分代码定义了Promise成功和失败时的处理逻辑。

## Promise 工作原理

### Promise 的三种状态
1. **pending（进行中）**：初始状态，既未成功也未失败
2. **fulfilled（已成功）**：操作成功完成
3. **rejected（已失败）**：操作失败

### 状态转换规则
- pending → fulfilled：调用resolve()函数
- pending → rejected：调用reject()函数
- 一旦状态改变，就不会再变，且结果值不可变

## 代码执行流程分析

1. 创建Promise实例，执行器函数立即执行
2. 由于变量success设为true，调用resolve("操作成功")
3. Promise状态从pending转为fulfilled
4. then方法注册的成功回调函数被执行
5. 控制台输出："成功: 操作成功"

如果success设为false，执行流程将是：
1. 调用reject("操作失败")
2. Promise状态从pending转为rejected
3. catch方法注册的失败回调函数被执行
4. 控制台输出："失败: 操作失败"

## 语法要点

### 执行器函数
- 执行器函数是同步执行的
- 接收resolve和reject两个参数，它们是函数
- resolve(value)：将Promise状态转为fulfilled
- reject(reason)：将Promise状态转为rejected

### then方法
- 接收两个回调函数作为参数：(onFulfilled, onRejected)
- 第一个参数处理成功情况
- 第二个参数处理失败情况（可选）

### catch方法
- 用于捕获Promise链中的错误
- 相当于then(null, rejection)
- 最佳实践是始终使用catch来处理错误

## 改进建议

虽然现有代码功能正确，但可以采用更现代的TypeScript风格：

```typescript
// 更现代化的写法
const promise = new Promise<string>((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("操作成功");
    } else {
        reject("操作失败");
    }
});

promise
    .then(result => console.log(`成功: ${result}`))
    .catch(error => console.log(`失败: ${error}`));
```

改进点包括：
- 使用const声明变量
- 显式类型注解
- 箭头函数语法
- 字符串模板字面量

## 实际应用场景

Promise广泛应用于：
- 异步API调用
- 文件读写操作
- 数据库查询
- 定时器操作
- 链式异步操作处理