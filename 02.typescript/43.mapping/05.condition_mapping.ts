// 定义 API 响应接口
interface APIResponse {
    // 响应数据
    data: string;
    // 错误信息
    error: string;
    // 是否加载中
    isLoading: boolean;
    // 时间戳
    timestamp: number;
}

// 将函数类型转换为 () => void
// 遍历所有属性，根据属性类型进行条件转换
type FunctionToVoid<T> = {
    // 如果 T[P] 是函数类型，转换为 () => void
    // 否则保持原类型不变
    [P in keyof T]: T[P] extends (...args: any[]) => any
        ? () => void
        : T[P];
};

// 使用条件映射
var response: FunctionToVoid<APIResponse> = {
    data: "hello",
    error: "",
    isLoading: false,
    timestamp: Date.now()
};

console.log("响应: " + JSON.stringify(response));

/*
代码解释：

type FunctionToVoid<T> = {
    [P in keyof T]: T[P] extends (...args: any[]) => any
        ? () => void
        : T[P];
};

这段代码实现了一个条件映射类型，具体分解如下：

1. [P in keyof T] - 映射遍历类型T的所有键
   - keyof T 获取类型T的所有键组成联合类型
   - P 是迭代变量，代表当前处理的键

2. T[P] extends (...args: any[]) => any - 条件判断
   - 检查 T[P] 是否为函数类型
   - (...args: any[]) => any 是函数类型的通用形式
   - any[] 表示任意数量、任意类型的参数
   - any 表示任意返回值类型

3. ? () => void : T[P] - 条件类型语法
   - 如果 T[P] 是函数类型，则映射为 () => void 类型
   - 否则保持原类型 T[P] 不变

这种模式被称为"条件类型"或"条件映射"，允许我们根据属性的类型来决定如何映射该属性。
在这个例子中，如果原类型中有函数属性，它们会被转换为不接受参数且无返回值的函数类型，
而其他非函数类型的属性则保持原有类型不变。
*/