// server.js
const http = require("http"); // 引入 Node.js 的 http 模块，用于创建服务器
const { URL } = require("url"); // 从 url 模块引入 URL 构造函数
 
// 定义并导出 start 函数，用于启动服务器
function start(route) {
  // 定义 onRequest 函数，处理每个请求
  function onRequest(request, response) {
    // 使用 URL 构造函数解析请求路径
    const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
    console.log(`Request for ${pathname} received.`); // 打印请求路径
 
    route(pathname); // 调用路由函数处理路径
 
    // 设置响应头和响应内容
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
  }
 
  // 创建服务器并监听指定端口
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
// 导出 start 函数供其他模块使用
module.exports.start = start;