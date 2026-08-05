// pool/demo.js
import { ProcessPool } from './index.js';

const pool = new ProcessPool({ file: './pool/worker.js', size: 4 });

const tasks = Array.from({ length: 10 }, (_, i) => pool.runTask({ n: 35 + (i % 3) }));
const t0 = Date.now();
const results = await Promise.all(tasks);
console.log('结果:', results);
console.log('耗时(ms):', Date.now() - t0);

await new Promise(r => setTimeout(r, 100)); // 等待消息刷完
pool.close();