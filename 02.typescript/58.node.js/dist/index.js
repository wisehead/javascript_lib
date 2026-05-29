"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userService_1 = __importDefault(require("./services/userService"));
// 创建 Express 应用
const app = (0, express_1.default)();
// 解析 JSON 请求体
app.use(express_1.default.json());
// 获取所有用户
app.get("/api/users", (req, res) => {
    const result = userService_1.default.getAllUsers();
    res.json(result);
});
// 获取单个用户
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const result = userService_1.default.getUser(id);
    res.json(result);
});
// 创建用户
app.post("/api/users", (req, res) => {
    const result = userService_1.default.createUser(req.body);
    res.json(result);
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
