/*
2807. Insert Greatest Common Divisors in Linked List
Difficulty: Medium

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:

Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes (nodes in blue are the inserted nodes).
- We insert the greatest common divisor of 18 and 6 = 6 between the 1st and the 2nd nodes.
- We insert the greatest common divisor of 6 and 10 = 2 between the 2nd and the 3rd nodes.
- We insert the greatest common divisor of 10 and 3 = 1 between the 3rd and the 4th nodes.
There are no more adjacent nodes, so we return the linked list.

Example 2:

Input: head = [7]
Output: [7]
Explanation: The 1st diagram denotes the initial linked list and the 2nd diagram denotes the linked list after inserting the new nodes.
There are no pairs of adjacent nodes, so we return the initial linked list.

Constraints:

The number of nodes in the list is in the range [1, 5000].
1 <= Node.val <= 1000
*/

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

// 思路：遍历原链表，在每对相邻节点之间插入 gcd 节点，然后跳过新节点继续。
// 时间 O(n·log M)，M 为节点最大值；额外空间 O(1)（不计新插入的节点）
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    let cur = head;
    while (cur && cur.next) {
        const next = cur.next;
        cur.next = new ListNode(gcd(cur.val, next.val), next);
        cur = next;   // 跳过新插入的节点
    }
    return head;
};

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

// ---- local test ----
const build = arr => arr.reduceRight((next, v) => new ListNode(v, next), null);
const toArray = h => { const r = []; for (; h; h = h.next) r.push(h.val); return r; };

console.log(toArray(insertGreatestCommonDivisors(build([18, 6, 10, 3])))); // [18,6,6,2,10,1,3]
console.log(toArray(insertGreatestCommonDivisors(build([7]))));            // [7]
