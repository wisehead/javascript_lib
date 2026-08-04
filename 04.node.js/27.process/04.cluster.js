// server-cluster.js
import cluster from 'node:cluster';
import os from 'node:os';
import http from 'node:http';
import { pbkdf2Sync } from 'node:crypto';

if (cluster.isPrimary) {
  const cpuCount = Math.max(1, os.cpus().length);
  console.log(`主进程 ${process.pid}，启动 ${cpuCount} 个工作进程`);
  for (let i = 0; i < cpuCount; i++) cluster.fork();

  cluster.on('exit', (worker, code) => {
    console.warn(`工作进程 ${worker.process.pid} 退出（code=${code}），重启中…`);
    cluster.fork();
  });
} else {
  const server = http.createServer((req, res) => {
    // 模拟 CPU 密集计算
    pbkdf2Sync('password', 'salt', 100_000, 64, 'sha512');
    res.writeHead(200, {'content-type':'text/plain; charset=utf-8'});
    res.end(`Handled by worker ${process.pid}\n`);
  });

  server.listen(3000, () => {
    console.log(`工作进程 ${process.pid} 监听 3000`);
  });
}