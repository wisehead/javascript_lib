// 任务状态枚举
export type TaskStatus = "pending" | "in-progress" | "completed";

// 任务优先级枚举
export type TaskPriority = "low" | "medium" | "high";

// 任务接口定义
export interface Task {
    id: string;               // 任务ID
    title: string;            // 任务标题
    description?: string;      // 任务描述（可选）
    status: TaskStatus;       // 任务状态
    priority: TaskPriority;   // 任务优先级
    createdAt: string;        // 创建时间
    updatedAt: string;         // 更新时间
    dueDate?: string;         // 截止日期（可选）
    tags?: string[];          // 标签（可选）
}

// 创建任务的输入类型
export interface CreateTaskInput {
    title: string;
    description?: string;
    priority: TaskPriority;
    dueDate?: string;
    tags?: string[];
}

// 更新任务的输入类型
export interface UpdateTaskInput {
    title?: string;
    description?: string;
    status?: TaskStatus;
    priority?: TaskPriority;
    dueDate?: string;
    tags?: string[];
}

// 任务过滤选项
export interface TaskFilter {
    status?: TaskStatus;
    priority?: TaskPriority;
    search?: string;
}