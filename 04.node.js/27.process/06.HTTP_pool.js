// app.js
import http from 'node:http';
import { ProcessPool } from './pool/index.js';

const pool = new ProcessPool({ file: './pool/worker.js', size: 4 });
const server = http.createServer(async (req, res) => {
  if (req.url?.startsWith('/fib?')) {
    const url = new URL(req.url, 'http://localhost');
    const n = Number(url.searchParams.get('n') || 35);
    try {
      const result = await pool.runTask({ n });
      res.writeHead(200, {'content-type': 'application/json'});
      res.end(JSON.stringify({ pid: process.pid, n, result }));
    } catch (e) {
      res.writeHead(500); res.end('error');
    }
  } else {
    res.writeHead(404).end('Not Found');
  }
});

server.listen(3000, () => console.log('http://localhost:3000'));