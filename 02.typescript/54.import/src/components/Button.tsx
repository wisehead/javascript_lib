// 使用相对路径导入
import { User } from '../types/user';
import { fetchUser } from '../services/userApi';
import { formatDate } from '../utils/date';

// 导入样式
import styles from '@/components/Button.module.css';

// 导入图片
import logo from '@assets/logo.png';

// 使用导入的模块
const handleClick = () => {
    console.log('按钮点击');
};

// 创建一个简单的 Button 类型或接口定义
interface ButtonProps {
    text: string;
    onClick: () => void;
}

// 导出 Button 类
export class Button {
    text: string;
    onClick: () => void;

    constructor(props: ButtonProps) {
        this.text = props.text;
        this.onClick = props.onClick;
    }
}

// 创建一个实例用于测试
const userButton = new Button({
    text: '用户',
    onClick: handleClick
});

console.log('组件加载成功');

// 使用导入的功能
fetchUser(1).then(user => {
    console.log(`获取到用户: ${user.name}`);
    console.log(`格式化日期: ${formatDate(new Date())}`);
});
