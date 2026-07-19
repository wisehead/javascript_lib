const express = require('express');
const app = express();
const port = 3000;

// 定义一个 GET 路由
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 定义一个 POST 路由
app.post('/submit', (req, res) => {
    res.send('Form submitted!');
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});