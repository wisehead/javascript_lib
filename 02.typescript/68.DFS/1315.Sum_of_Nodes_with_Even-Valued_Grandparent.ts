/*
1315. Sum of Nodes with Even-Valued Grandparent
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

A grandparent of a node is the parent of its parent if it exists.

 

Example 1:


Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
Example 2:


Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 100
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


function sumEvenGrandparent(root: TreeNode | null): number {
    const path: number[] = [];
    const dfs = (node: TreeNode | null):number => {
        if (node === null) return 0;
        let sum = 0;
        if (path.length >= 2 && path[path.length - 2] % 2 === 0) {
            sum += node.val;
        }
        path.push(node.val);
        sum += dfs(node.left);
        sum += dfs(node.right);
        path.pop();
        return sum;
    }
    return dfs(root);
};

function sumEvenGrandparent2(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null, parent: number, grand: number): number => {
        if (!node) return 0;
        const add = grand % 2 === 0 ? node.val : 0;
        return add
            + dfs(node.left, node.val, parent)
            + dfs(node.right, node.val, parent);
    };
    return dfs(root, 1, 1); // 初始用奇数，表示“尚无祖父”
}


export { TreeNode, sumEvenGrandparent, sumEvenGrandparent2 };