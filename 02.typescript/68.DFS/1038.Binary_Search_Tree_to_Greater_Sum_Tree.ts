// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function bstToGst2(root: TreeNode | null): TreeNode | null {

    const dfs = (node: TreeNode | null, delta: number):number => {
        if (node === null) return 0;
        if (node.left === null && node.right == null) {
            node.val += delta;
            return node.val;
        }

        if (node.right) {
            const rmax = dfs(node.right, delta);
            node.val += rmax;
        } else {
            node.val += delta;
        }
        let cmax = node.val;
        if (node.left) {
            const lmax = dfs(node.left, node.val);
            cmax = Math.max(cmax, lmax);
        }
        return cmax;
    };
    const ret = dfs(root, 0);
    return root;
};

/*
结论：算法能过题，但「用 max 冒充右子树贡献」可读性差；更干净的写法&#x662F;__&#x53CD;序中序 + 累加 sum__。

### 主要问题

1. __语义拧巴__：`rmax`/`cmax`/`Math.max` 实际依赖「GST 后子树最小值对应最大新值 = 子树原值和 + delta」。正确，但难维护，新人很难一眼看出在求「所有更大键之和」。
2. __叶子特判多余__：`left/right` 都空时的分支可并入通用逻辑。
3. __死变量__：`const ret = dfs(root, 0)` 的 `ret` 未使用。
4. __风格__：`== null` 与 `=== null` 混用；函数尾多余 `;`。

### 推荐写法（更直白）

*/

function bstToGst(root: TreeNode | null): TreeNode | null {
    let sum = 0;
    const dfs = (node: TreeNode | null): void => {
        if (node === null) return;
        dfs(node.right);
        sum += node.val;
        node.val = sum;
        dfs(node.left);
    };
    dfs(root);
    return root;
}



// 复杂度仍是 O(n) 时间、O(h) 栈空间，意图就是：右 → 根 → 左，把「已访问的更大键之和」写回当前节点。

// ### 若保留当前结构

// - 返回值改成「子树原值总和 + delta」（或直接返回更新后的「覆盖整个子树贡献」的那个和），去掉 `Math.max`。
// - 删掉叶子特判与未使用的 `ret`。
// - 统一用 `===`。
