import { User, CreateUserDTO, ApiResponse } from "../types";
declare class UserService {
    private users;
    private nextId;
    createUser(dto: CreateUserDTO): ApiResponse<User>;
    getUser(id: number): ApiResponse<User>;
    getAllUsers(): ApiResponse<User[]>;
}
declare const _default: UserService;
export default _default;
