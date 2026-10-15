/*
2181. Merge Nodes in Between Zeros
Solved
Medium
Topics
premium lock icon
Companies
Hint
You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

Return the head of the modified linked list.

 

Example 1:


Input: head = [0,3,1,0,4,5,2,0]
Output: [4,11]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11.
Example 2:


Input: head = [0,1,0,3,0,2,2,0]
Output: [1,3,4]
Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 1 = 1.
- The sum of the nodes marked in red: 3 = 3.
- The sum of the nodes marked in yellow: 2 + 2 = 4.
 

Constraints:

The number of nodes in the list is in the range [3, 2 * 105].
0 <= Node.val <= 1000
There are no two consecutive nodes with Node.val == 0.
The beginning and end of the linked list have Node.val == 0.
*/

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// export 使本文件成为 ES 模块，ListNode 等声明限定在模块作用域内，
// 避免与其它全局脚本文件（如 52.nested/05.link.ts 的 interface ListNode）的重复标识符冲突
export function mergeNodes(head: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    let tail: ListNode = dummy; // 尾指针始终指向非空节点
    let p = head;
    while (p !== null) {
        if (p.val === 0) {
            const next = p.next;        // 下一段的首节点；末尾 0 之后为 null
            tail.next = next;
            if (next === null) break;   // 边界：已到链表末尾，类型收窄为 ListNode
            tail = next;
        } else if (p !== tail) {
            tail.val += p.val;          // 复用各段首节点累加，跳过自身避免重复计入
        }
        p = p.next;
    }
    return dummy.next;
};