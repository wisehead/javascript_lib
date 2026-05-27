import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // 自动打开浏览器
    port: 3001, // 修改端口号为3001以避免冲突
    host: true, // 允许外部访问
    strictPort: false, // 如果端口被占用，自动尝试下一个可用端口
  },
  root: '.', // 设置根目录
  publicDir: 'public', // 设置公共目录
  appType: 'spa', // 明确指定这是一个单页应用
});
