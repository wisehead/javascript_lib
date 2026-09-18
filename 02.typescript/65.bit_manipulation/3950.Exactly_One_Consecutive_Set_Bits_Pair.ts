/*
3950. Exactly One Consecutive Set Bits Pair
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer n.

Return true if its binary representation contains exactly one adjacent pair of set bits, and false otherwise.

 

Example 1:

Input: n = 6

Output: true

Explanation:

Binary representation of 6 is 110.
There is exactly one adjacent pair of set bits ("11"). Thus, the answer is true​​​​​​​.
Example 2:

Input: n = 5

Output: false

Explanation:

Binary representation of 5 is 101.
There is no adjacent pair of set bits. Thus, the answer is false​​​​​​​.
 

Constraints:

0 <= n <= 105

*/
function consecutiveSetBits(n: number): boolean {
    let b = n.toString(2);
    let cnt = 0;
    let status = 0;
    for (let i = 0; i < b.length; i++) {
        if (b[i] == "1") {
            if (status == 2)  return false;
            if (status == 1) cnt++;
            status++;
        } else {
            status = 0;
        }
    }
    return cnt == 1;
}

function consecutiveSetBits2(n: number): boolean {
    const pairs = n & (n >> 1);        // 每个 1 对应一对相邻置位
    return pairs !== 0 && (pairs & (pairs - 1)) === 0;  // 恰好一对 ⇔ 2 的幂
}