const http = require('http');
const util = require('util');
 
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
 
    // 使用 URL 构造函数解析请求的 URL
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    
    // 输出 URL 的各个部分
    res.end(util.inspect({
        href: myUrl.href,
        origin: myUrl.origin,
        protocol: myUrl.protocol,
        host: myUrl.host,
        hostname: myUrl.hostname,
        port: myUrl.port,
        pathname: myUrl.pathname,
        search: myUrl.search,
        searchParams: Object.fromEntries(myUrl.searchParams) // 将 searchParams 转为普通对象
    }));
}).listen(3000);
 
console.log("Server is running at http://localhost:3000");