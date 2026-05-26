#!/bin/sh 

# 构建脚本用于将带JSDoc注解的JS文件转换为TypeScript定义

echo "开始迁移 JS 文件到 TS..."

# 检查是否安装了 jsdoc 工具
if ! command -v jsdoc &> /dev/null; then
    echo "警告: 未找到 jsdoc 工具。请先安装: npm install -g jsdoc"
else
    echo "正在生成 JSDoc 文档..."
    jsdoc utils.js -d docs
    echo "JSDoc 文档已生成到 docs 目录"
fi

# 检查是否安装了 typings 工具用于从 JSDoc 生成 .d.ts 文件
if ! command -v typings &> /dev/null; then
    echo "提示: 如果要从 JSDoc 生成 TypeScript 定义文件，可安装: npm install -g typings"
fi

# 显示 JS 文件中的 JSDoc 信息
echo "检查 utils.js 中的 JSDoc 注解..."
grep -A 5 -B 0 "@param\|@returns\|@typedef" utils.js

echo "迁移检查完成！"