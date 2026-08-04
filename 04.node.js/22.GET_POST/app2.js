const http = require('http');
 
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
 
    // 使用 URL 构造函数解析请求 URL
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    
    // 获取查询参数
    const name = myUrl.searchParams.get("name");
    const siteUrl = myUrl.searchParams.get("url");
 
    res.write("网站名：" + (name || "未提供"));
    res.write("\n");
    res.write("网站 URL：" + (siteUrl || "未提供"));
    res.end();
 
}).listen(3000);
 
console.log("Server is running at http://localhost:3000");