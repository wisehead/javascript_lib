/*
1038. Binary Search Tree to Greater Sum Tree
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:


Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
Example 2:

Input: root = [0,null,1]
Output: [1,null,1]
 

Constraints:

The number of nodes in the tree is in the range [1, 100].
0 <= Node.val <= 100
All the values in the tree are unique.
 

Note: This question is the same as 538: https://leetcode.com/problems/convert-bst-to-greater-tree/
*/

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
