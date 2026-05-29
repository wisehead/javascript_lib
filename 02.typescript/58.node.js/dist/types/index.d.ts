export interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}
export interface CreateUserDTO {
    name: string;
    email: string;
    password: string;
}
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}
