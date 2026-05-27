// 导入 React Hooks 和类型
import { useState, useEffect, useCallback } from "react";
import {
    Task,
    CreateTaskInput,
    UpdateTaskInput,
    TaskFilter,
    TaskStatus,
    TaskPriority
} from "../types/task";
import { taskService } from "../services/taskService";

// Hook 返回的状态类型
interface UseTasksReturn {
    tasks: Task[];
    loading: boolean;
    error: string | null;
    filter: TaskFilter;
    // 操作方法
    createTask: (input: CreateTaskInput) => Promise<void>;
    updateTask: (id: string, input: UpdateTaskInput) => Promise<void>;
    deleteTask: (id: string) => Promise<void>;
    updateStatus: (id: string, status: TaskStatus) => Promise<void>;
    setFilter: (filter: TaskFilter) => void;
    refresh: () => void;
}

// 初始化默认过滤器
const defaultFilter: TaskFilter = {};

export function useTasks(): UseTasksReturn {
    // 任务列表状态
    const [tasks, setTasks] = useState<Task[]>([]);
    // 加载状态
    const [loading, setLoading] = useState(true);
    // 错误状态
    const [error, setError] = useState<string | null>(null);
    // 过滤条件
    const [filter, setFilter] = useState<TaskFilter>(defaultFilter);

    // 加载任务列表
    const loadTasks = useCallback(() => {
        setLoading(true);
        setError(null);

        try {
            const data = taskService.getAll(filter);
            setTasks(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "加载失败");
        } finally {
            setLoading(false);
        }
    }, [filter]);

    // 初始加载和过滤器变化时重新加载
    useEffect(() => {
        loadTasks();
    }, [loadTasks]);

    // 创建任务
    const createTask = useCallback(async (input: CreateTaskInput) => {
        try {
            taskService.create(input);
            loadTasks();
        } catch (err) {
            setError(err instanceof Error ? err.message : "创建失败");
        }
    }, [loadTasks]);

    // 更新任务
    const updateTask = useCallback(async (id: string, input: UpdateTaskInput) => {
        try {
            taskService.update(id, input);
            loadTasks();
        } catch (err) {
            setError(err instanceof Error ? err.message : "更新失败");
        }
    }, [loadTasks]);

    // 删除任务
    const deleteTask = useCallback(async (id: string) => {
        try {
            taskService.delete(id);
            loadTasks();
        } catch (err) {
            setError(err instanceof Error ? err.message : "删除失败");
        }
    }, [loadTasks]);

    // 更新任务状态
    const updateStatus = useCallback(async (id: string, status: TaskStatus) => {
        try {
            taskService.updateStatus(id, status);
            loadTasks();
        } catch (err) {
            setError(err instanceof Error ? err.message : "状态更新失败");
        }
    }, [loadTasks]);

    // 刷新任务列表
    const refresh = useCallback(() => {
        loadTasks();
    }, [loadTasks]);

    return {
        tasks,
        loading,
        error,
        filter,
        createTask,
        updateTask,
        deleteTask,
        updateStatus,
        setFilter,
        refresh
    };
}