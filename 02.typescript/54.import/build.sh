#!/bin/bash

# 项目编译和运行脚本

echo "开始编译项目..."

# 编译 TypeScript 代码
npx tsc --project tsconfig.json

if [ $? -eq 0 ]; then
    echo "编译成功！"
    echo "编译后的文件已输出到 dist 目录"
    
    echo "运行项目..."
    # 使用 Node.js 运行编译后的代码
    node -e "
    // 导入编译后的模块
    const { fetchUser } = require('./dist/services/userApi');
    const { formatDate } = require('./dist/utils/date');

    // 使用导入的模块
    const handleClick = () => {
        console.log('按钮点击');
    };

    class Button {
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
        console.log(\`获取到用户: \${user.name}\`);
        console.log(\`格式化日期: \${formatDate(new Date())}\`);
    });
    "
    
    echo "项目运行完成！"
else
    echo "编译失败，请检查代码错误。"
    exit 1
fi