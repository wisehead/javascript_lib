// 导入 React 和自定义 Hook
import React from "react";
import { useTasks } from "../hooks/useTasks";
import { Task, TaskStatus, TaskPriority } from "../types/task";

// 任务项组件 Props
interface TaskItemProps {
    task: Task;
    onStatusChange: (id: string, status: TaskStatus) => void;
    onDelete: (id: string) => void;
}

// 任务项组件
const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete
}) => {
    // 状态样式映射
    const statusStyles: Record<TaskStatus, string> = {
        "pending": "status-pending",
        "in-progress": "status-progress",
        "completed": "status-completed"
    };

    // 优先级样式映射
    const priorityLabels: Record<TaskPriority, string> = {
        "low": "低",
        "medium": "中",
        "high": "高"
    };

    return (
        <div className={`task-item ${statusStyles[task.status]}`}>
            <div className="task-content">
                <h3 className="task-title">{task.title}</h3>
                {task.description && (
                    <p className="task-description">{task.description}</p>
                )}
                <div className="task-meta">
                    <span className={`priority priority-${task.priority}`}>
                        {priorityLabels[task.priority]}
                    </span>
                    <span className="task-date">
                        {new Date(task.createdAt).toLocaleDateString()}
                    </span>
                </div>
            </div>
            <div className="task-actions">
                <select
                    value={task.status}
                    onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
                    className="status-select"
                >
                    <option value="pending">待处理</option>
                    <option value="in-progress">进行中</option>
                    <option value="completed">已完成</option>
                </select>
                <button
                    onClick={() => onDelete(task.id)}
                    className="delete-btn"
                >
                    删除
                </button>
            </div>
        </div>
    );
};

// 任务列表组件
export const TaskList: React.FC = () => {
    // 使用自定义 Hook 获取任务状态
    const {
        tasks,
        loading,
        error,
        updateStatus,
        deleteTask
    } = useTasks();

    // 渲染加载状态
    if (loading) {
        return <div className="loading">加载中...</div>;
    }

    // 渲染错误状态
    if (error) {
        return <div className="error">错误: {error}</div>;
    }

    // 渲染空状态
    if (tasks.length === 0) {
        return (
            <div className="empty">
                <p>暂无任务</p>
                <p>点击上方按钮创建新任务</p>
            </div>
        );
    }

    // 渲染任务列表
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={updateStatus}
                    onDelete={deleteTask}
                />
            ))}
        </div>
    );
};

export default TaskList;