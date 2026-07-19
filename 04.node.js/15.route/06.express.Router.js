const express = require('express');
const app = express();
const port = 3000;

// 创建一个路由器实例
const userRouter = express.Router();

// 定义用户相关的路由
userRouter.get('/', (req, res) => {
    res.send('List of users');
});

userRouter.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// 挂载用户路由器
app.use('/users', userRouter);

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});