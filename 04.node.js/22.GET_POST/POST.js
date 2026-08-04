const http = require('http');

// 创建 HTTP 服务器
http.createServer((req, res) => {
    // 检查请求方法是否为 POST
    if (req.method === 'POST') {
        let body = '';

        // 监听 data 事件，逐块接收数据
        req.on('data', (chunk) => {
            body += chunk; // 累加接收到的数据块
        });
        
        // json处理例子，备用
        // req.on('end', () => {
        //     const parsedData = JSON.parse(body); // 将 JSON 字符串解析为对象
        //     console.log('Received JSON data:', parsedData);
        //     res.end('JSON data received successfully!');
        // });

        // 监听 end 事件，数据接收完毕
        req.on('end', () => {
            // 输出接收到的 POST 数据
            console.log('Received POST data:', body);

            // 设置响应头和内容
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('POST data received successfully!');
        });

    } else {
        // 非 POST 请求的处理
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST requests are supported.');
    }

}).listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});