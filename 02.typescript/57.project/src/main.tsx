import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 引入全局样式
import './index.css';

// 渲染应用到 DOM
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);