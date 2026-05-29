import express, { Request, Response } from "express";
import userService from "./services/userService";

// 创建 Express 应用
const app = express();
// 解析 JSON 请求体
app.use(express.json());

// 根路径路由
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "欢迎使用用户服务 API", endpoints: ["/api/users", "/api/users/:id"] });
});

// 获取所有用户
app.get("/api/users", (req: Request, res: Response) => {
    const result = userService.getAllUsers();
    res.json(result);
});

// 获取单个用户
app.get("/api/users/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = userService.getUser(id);
    res.json(result);
});

// 创建用户
app.post("/api/users", (req: Request, res: Response) => {
    const result = userService.createUser(req.body);
    res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});