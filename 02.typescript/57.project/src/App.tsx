// 导入 React 和类型
import React, { useState } from "react";
import { TaskList } from "./components/TaskList";
import { useTasks } from "./hooks/useTasks";
import { CreateTaskInput, TaskPriority } from "./types/task";

// 任务表单组件 Props
interface TaskFormProps {
    onSubmit: (input: CreateTaskInput) => void;
}

// 任务表单组件
const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
    // 表单状态
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<TaskPriority>("medium");

    // 提交处理
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim()) {
            alert("请输入任务标题");
            return;
        }

        onSubmit({
            title: title.trim(),
            description: description.trim() || undefined,
            priority
        });

        // 重置表单
        setTitle("");
        setDescription("");
        setPriority("medium");
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="输入任务标题"
                className="form-input"
            />
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="输入任务描述（可选）"
                className="form-input"
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as TaskPriority)}
                className="form-select"
            >
                <option value="low">低优先级</option>
                <option value="medium">中优先级</option>
                <option value="high">高优先级</option>
            </select>
            <button type="submit" className="submit-btn">
                添加任务
            </button>
        </form>
    );
};

// 主应用组件
const App: React.FC = () => {
    // 使用自定义 Hook
    const { createTask, error } = useTasks();

    // 渲染错误提示
    const renderError = () => {
        if (!error) return null;
        return <div className="app-error">{error}</div>;
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>TypeScript 任务管理系统</h1>
                <p>综合实战项目</p>
            </header>

            {renderError()}

            <main className="app-main">
                <TaskForm onSubmit={createTask} />
                <TaskList />
            </main>

            <footer className="app-footer">
                <p>Powered by TypeScript + React</p>
            </footer>
        </div>
    );
};

export default App;