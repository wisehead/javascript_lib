import { Button } from '@/components/Button';
import { fetchUser } from '@/services/userApi';
import { formatDate } from '@/utils/date';

// 创建一个简单的 UI 来展示功能
document.addEventListener('DOMContentLoaded', () => {
    const appDiv = document.getElementById('app');
    
    if (appDiv) {
        // 创建按钮实例
        const button = new Button({
            text: '获取用户信息',
            onClick: async () => {
                console.log('按钮被点击');
                
                try {
                    const user = await fetchUser(1);
                    console.log(`获取到用户: ${user.name}`);
                    
                    // 在页面上显示结果
                    const resultDiv = document.createElement('div');
                    resultDiv.innerHTML = `
                        <h3>用户信息:</h3>
                        <p>姓名: ${user.name}</p>
                        <p>ID: ${user.id}</p>
                        <p>邮箱: ${user.email}</p>
                        <p>当前时间: ${formatDate(new Date())}</p>
                    `;
                    appDiv.appendChild(resultDiv);
                } catch (error) {
                    console.error('获取用户信息失败:', error);
                    
                    const errorDiv = document.createElement('div');
                    errorDiv.style.color = 'red';
                    errorDiv.textContent = '获取用户信息失败';
                    appDiv.appendChild(errorDiv);
                }
            }
        });

        // 将按钮添加到页面
        const buttonElement = document.createElement('button');
        buttonElement.textContent = button.text;
        buttonElement.onclick = button.onClick;
        buttonElement.className = 'button'; // 使用 CSS 模块中的样式
        appDiv.appendChild(buttonElement);
        
        // 显示初始信息
        const infoDiv = document.createElement('div');
        infoDiv.innerHTML = '<p>点击上面的按钮来获取用户信息</p>';
        appDiv.appendChild(infoDiv);
    }
});

// 导出一些功能供其他模块使用（如果需要）
export { Button, fetchUser, formatDate };