
/*
2415. Reverse Odd Levels of Binary Tree
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given the root of a perfect binary tree, reverse the node values at each odd level of the tree.

For example, suppose the node values at level 3 are [2,1,3,4,7,11,29,18], then it should become [18,29,11,7,4,3,1,2].
Return the root of the reversed tree.

A binary tree is perfect if all parent nodes have two children and all leaves are on the same level.

The level of a node is the number of edges along the path between it and the root node.

 

Example 1:


Input: root = [2,3,5,8,13,21,34]
Output: [2,5,3,8,13,21,34]
Explanation: 
The tree has only one odd level.
The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.
Example 2:


Input: root = [7,13,11]
Output: [7,11,13]
Explanation: 
The nodes at level 1 are 13, 11, which are reversed and become 11, 13.
Example 3:

Input: root = [0,1,2,0,0,0,0,1,1,1,1,2,2,2,2]
Output: [0,2,1,0,0,0,0,2,2,2,2,1,1,1,1]
Explanation: 
The odd levels have non-zero values.
The nodes at level 1 were 1, 2, and are 2, 1 after the reversal.
The nodes at level 3 were 1, 1, 1, 1, 2, 2, 2, 2, and are 2, 2, 2, 2, 1, 1, 1, 1 after the reversal.
 

Constraints:

The number of nodes in the tree is in the range [1, 214].
0 <= Node.val <= 105
root is a perfect binary tree.
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

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (root === null) return root;
    let level = 0;
    const vec: TreeNode[] = [root];

    while (vec.length > 0) {
        let size = vec.length;
        while (size-- > 0) {
            const head = vec.shift()!;
            if (head.left) vec.push(head.left);
            if (head.right) vec.push(head.right);
        }
        if (++level % 2 === 1) {
            const n = vec.length;
            for (let i = 0; i < n >> 1; i++) {
                const temp = vec[i].val;
                vec[i].val = vec[n - 1 - i].val;
                vec[n - 1 - i].val = temp;
            }
        }
    }
    return root;
}

function reverseOddLevels2(root: TreeNode | null): TreeNode | null {
    if (root === null) return root;
    let curr: TreeNode[] = [root];
    let level = 0;
    while (curr.length) {
        const next: TreeNode[] = [];
        for (const node of curr) {
            if (node.left) next.push(node.left);
            if (node.right) next.push(node.right);
        }
        if (++level % 2 === 1) {
            for (let i = 0, j = next.length - 1; i < j; i++, j--) {
                const t = next[i].val;
                next[i].val = next[j].val;
                next[j].val = t;
            }
        }
        curr = next;
    }

    return root;
}