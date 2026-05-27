# TypeScript Import 示例项目

这个项目演示了如何正确使用 TypeScript 的导入功能，包括路径别名、模块导入等。

## 项目结构

```
src/
├── components/
│   ├── Button.tsx          # 主组件文件
│   └── Button.module.css   # 组件样式
├── types/
│   ├── user.ts             # 用户类型定义
│   └── global.d.ts         # 全局类型声明
├── services/
│   └── userApi.ts          # 用户API服务
├── utils/
│   └── date.ts             # 日期工具函数
└── assets/
    └── logo.png            # 图片资源
```

## 功能特性

- 使用路径别名（如 `@/components`, `@utils` 等）
- TypeScript 类型安全
- 模块导入/导出示例
- CSS 模块化
- 异步操作示例

## 编译和运行

### 方法一：使用构建脚本（Node.js环境）

```bash
# 进入项目目录
cd 02.typescript/54.import

# 执行构建脚本
./build.sh
```

### 方法二：手动编译和运行（Node.js环境）

```bash
# 编译 TypeScript 代码
npx tsc --project tsconfig.json

# 运行编译后的代码
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
```

### 方法三：在浏览器中运行（开发模式）

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

然后在浏览器中打开 http://localhost:9000 查看应用。

### 方法四：构建生产版本

```bash
# 构建生产版本
npm run build
```

## 配置说明

- `tsconfig.json`: TypeScript 编译配置，包含路径别名设置
- `webpack.config.js`: Webpack 配置文件，用于打包和开发服务器
- 路径别名映射:
  - `@/*` → `src/*`
  - `@components/*` → `src/components/*`
  - `@utils/*` → `src/utils/*`
  - `@services/*` → `src/services/*`
  - `@assets/*` → `src/assets/*`
  - `@types/*` → `src/types/*`

## 输出结果

运行项目后，你应该看到以下输出：

```
组件加载成功
获取到用户: 测试用户
格式化日期: YYYY-MM-DD
```

其中 YYYY-MM-DD 是当前日期。
