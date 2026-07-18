var http = require("http");
var url = require("url");
 
function start() {
  function onRequest(request, response) {
    // 使用 URL 构造函数解析请求路径
    const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;
    console.log(`Request for ${pathname} received.`); // 打印请求路径
    // 设置响应头和响应内容
    response.writeHead(200, { "Content-Type": "text/plain" }); // 设置状态码和内容类型
    response.write("Hello World"); // 向客户端发送响应内容
    response.end(); // 结束响应
  }
 
  // 创建服务器并监听指定端口
  http.createServer(onRequest).listen(8888);
  console.log("Server has started."); // 打印服务器启动消息
}
 
// 导出 start 函数供其他模块使用
module.exports.start = start;