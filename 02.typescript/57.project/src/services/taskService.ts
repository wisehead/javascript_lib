// 导入类型定义
import {
    Task,
    CreateTaskInput,
    UpdateTaskInput,
    TaskFilter,
    TaskStatus,
    TaskPriority
} from "../types/task";

// 生成唯一ID
function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// 模拟数据库（内存存储）
let tasks: Task[] = [
    {
        id: "1",
        title: "学习 TypeScript",
        description: "掌握 TypeScript 基础和高级特性",
        status: "completed",
        priority: "high",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ["学习", "TypeScript"]
    },
    {
        id: "2",
        title: "开发任务管理系统",
        description: "使用 React + TypeScript 开发",
        status: "in-progress",
        priority: "high",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: ["项目", "实战"]
    }
];

// 任务服务类
class TaskService {
    // 获取所有任务
    getAll(filter?: TaskFilter): Task[] {
        let result = [...tasks];

        if (filter) {
            if (filter.status) {
                result = result.filter(t => t.status === filter.status);
            }
            if (filter.priority) {
                result = result.filter(t => t.priority === filter.priority);
            }
            if (filter.search) {
                const search = filter.search.toLowerCase();
                result = result.filter(t =>
                    t.title.toLowerCase().includes(search) ||
                    t.description?.toLowerCase().includes(search)
                );
            }
        }

        return result;
    }

    // 根据ID获取任务
    getById(id: string): Task | undefined {
        return tasks.find(t => t.id === id);
    }

    // 创建任务
    create(input: CreateTaskInput): Task {
        const now = new Date().toISOString();
        const task: Task = {
            id: generateId(),
            title: input.title,
            description: input.description,
            status: "pending",
            priority: input.priority,
            createdAt: now,
            updatedAt: now,
            dueDate: input.dueDate,
            tags: input.tags
        };

        tasks.push(task);
        return task;
    }

    // 更新任务
    update(id: string, input: UpdateTaskInput): Task | null {
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) return null;

        const task = tasks[index];
        const updated: Task = {
            ...task,
            ...input,
            updatedAt: new Date().toISOString()
        };

        tasks[index] = updated;
        return updated;
    }

    // 删除任务
    delete(id: string): boolean {
        const index = tasks.findIndex(t => t.id === id);
        if (index === -1) return false;

        tasks.splice(index, 1);
        return true;
    }

    // 更新任务状态
    updateStatus(id: string, status: TaskStatus): Task | null {
        return this.update(id, { status });
    }
}

// 导出服务实例
export const taskService = new TaskService();