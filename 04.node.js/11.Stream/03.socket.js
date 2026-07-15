const net = require('net');

// 创建一个 TCP 服务器
const server = net.createServer((socket) => {
    console.log('Client connected.');

    // 读取客户端数据
    socket.on('data', (data) => {
        console.log('Received data:', data.toString());
    });

    // 向客户端发送数据
    socket.write('Hello, Client!\n');

    // 监听关闭事件
    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000.');
});