import { fetchUser } from '../services/userApi';
import { formatDate } from '../utils/date';
// 使用导入的模块
const handleClick = () => {
    console.log('按钮点击');
};
class Button {
    text;
    onClick;
    constructor(props) {
        this.text = props.text;
        this.onClick = props.onClick;
    }
}
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
