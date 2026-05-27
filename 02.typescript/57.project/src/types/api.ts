// 通用 API 响应类型
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// 分页元数据
export interface PaginationMeta {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

// 分页响应类型
export interface PaginatedResponse<T> {
    items: T[];
    meta: PaginationMeta;
}

// 请求错误类型
export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, string>;
}

// HTTP 方法类型
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

// 任务相关的 API 端点
export interface TaskEndpoints {
    getAll: "/api/tasks";
    getById: "/api/tasks/:id";
    create: "/api/tasks";
    update: "/api/tasks/:id";
    delete: "/api/tasks/:id";
}