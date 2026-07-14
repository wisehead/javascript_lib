const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // 主进程 fork 工作进程
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // 工作进程退出后自动重启
  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出，正在重启`);
    cluster.fork();
  });
} else {
  // 工作进程创建HTTP服务器
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('你好世界\n');
  });

  server.on('error', (err) => {
    console.error(`工作进程 ${process.pid} 服务器错误：`, err);
  });

  server.listen(process.env.PORT || 8000);

  console.log(`工作进程 ${process.pid} 已启动`);
}
