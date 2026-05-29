// 用户类型定义
export interface User {
    id: number;         // 用户 ID
    name: string;       // 用户名
    email: string;      // 邮箱
    createdAt: Date;   // 创建时间
}

// 创建用户的数据传输对象
export interface CreateUserDTO {
    name: string;       // 用户名（必填）
    email: string;     // 邮箱（必填）
    password: string;   // 密码（必填）
}

// API 响应类型（泛型）
export interface ApiResponse<T> {
    success: boolean;   // 是否成功
    data?: T;         // 成功时的数据
    error?: string;   // 失败时的错误信息
}