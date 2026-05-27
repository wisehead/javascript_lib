// 定义树节点类型，children 引用自身
interface TreeNode {
    id: number;                    // 节点ID
    name: string;                  // 节点名称
    children?: TreeNode[];         // 子节点数组，递归引用
}

// 创建树形结构
const fileSystem: TreeNode = {
    id: 1,
    name: "根目录",
    children: [
        {
            id: 2,
            name: "文件夹1",
            children: [
                { id: 5, name: "文件A.txt" },
                { id: 6, name: "文件B.txt" }
            ]
        },
        {
            id: 3,
            name: "文件夹2",
            children: [
                { id: 7, name: "文件C.txt" }
            ]
        },
        {
            id: 4,
            name: "文件.txt"
        }
    ]
};

// 遍历树的函数
function traverse(node: TreeNode, depth: number = 0): void {
    const indent = "  ".repeat(depth);
    console.log(indent + "&#x1f4c1; " + node.name);

    if (node.children) {
        for (const child of node.children) {
            traverse(child, depth + 1);
        }
    }
}

traverse(fileSystem);