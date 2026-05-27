#############################################################
#   File Name: 02.build.sh
#     Autohor: Hui Chen (c) 2026
#        Mail: alex.chenhui@gmail.com
# Create Time: 2026/05/27-15:50:48
#############################################################
#!/bin/sh 
# 编译 TypeScript 文件
npx tsc 02.factory.ts --outDir dist

# 运行编译后的 JavaScript 文件
node dist/02.factory.js

