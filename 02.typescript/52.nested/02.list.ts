// 定义嵌套列表类型
type NestedList<T> = T | NestedList<T>[];

// 定义任务类型
interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// 创建嵌套任务列表
const tasks: NestedList<Task> = [
    { id: 1, title: "项目A", completed: false },
    [
        { id: 2, title: "子任务1", completed: true },
        { id: 3, title: "子任务2", completed: false }
    ],
    { id: 4, title: "项目B", completed: false }
];

// 计算嵌套列表深度
function getDepth<T>(list: NestedList<T>, depth: number = 0): number {
    if (Array.isArray(list)) {
        let maxDepth = depth + 1;
        for (const item of list) {
            maxDepth = Math.max(maxDepth, getDepth(item, depth + 1));
        }
        return maxDepth;
    }
    return depth;
}

console.log("列表深度: " + getDepth(tasks));