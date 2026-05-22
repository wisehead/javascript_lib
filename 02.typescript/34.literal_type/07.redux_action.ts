// 定义 Redux 风格的 Action 类型
// 使用联合类型定义不同类型的 Action
type Action =
    // 增加类型的 Action，包含数字类型的 payload
    | { type: "increment"; payload: number }
    // 减少类型的 Action，包含数字类型的 payload
    | { type: "decrement"; payload: number }
    // 重置类型的 Action，没有 payload
    | { type: "reset" };

// 使用 action 的 reducer 函数
function reducer(action: Action): void {
    // TypeScript 会根据 action.type 的值自动推断 action 的具体类型
    switch (action.type) {
        case "increment":
            // 在这个分支中，action 被推断为 { type: "increment"; payload: number }
            console.log("增加: " + action.payload);
            break;
        case "decrement":
            // 在这个分支中，action 被推断为 { type: "decrement"; payload: number }
            console.log("减少: " + action.payload);
            break;
        case "reset":
            // 在这个分支中，action 被推断为 { type: "reset" }
            console.log("重置");
            break;
    }
}

// 派发不同类型的 Action
reducer({ type: "increment", payload: 5 });
reducer({ type: "reset" });