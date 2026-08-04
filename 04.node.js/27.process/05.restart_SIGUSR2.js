// 摘要示例（在 cluster.isPrimary 分支里）
process.on('SIGUSR2', async () => {
  console.log('收到 SIGUSR2，开始优雅重启');
  const workers = Object.values(cluster.workers ?? {});
  // 1) 启新
  const fresh = cluster.fork();
  await new Promise(r => fresh.once('listening', r));
  // 2) 逐个下线旧的
  for (const w of workers) {
    w?.disconnect();
    // 超时还没退就强杀
    setTimeout(() => w?.process.kill('SIGKILL'), 5000);
  }
});