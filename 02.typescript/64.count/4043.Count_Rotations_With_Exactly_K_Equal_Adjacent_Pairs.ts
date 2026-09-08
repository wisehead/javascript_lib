/*
4043. Count Rotations With Exactly K Equal Adjacent Pairs
Solved
Easy
premium lock icon
Companies
Hint
You are given a string s of length n and an integer k.

A cyclic rotation of s is obtained by choosing a prefix of s whose length is between 0 and n - 1 (inclusive), and moving it to the end of the string while preserving the order of all characters.

For every cyclic rotation of s, let its score be the number of indices i such that 0 <= i < n - 1 and the characters at positions i and i + 1 are equal.

Return the number of cyclic rotations of s whose score equals k.

 

Example 1:

Input: s = "aab", k = 1

Output: 2

Explanation:

The cyclic rotations of s are:

"aab": The characters at positions 0 and 1 are equal, so score = 1.
"aba": No two adjacent characters are equal, so score = 0.
"baa": The characters at positions 1 and 2 are equal, so score = 1.
Since score equals k for 2 cyclic rotations of s, the answer is 2.

Example 2:

Input: s = "abca", k = 0

Output: 1

Explanation:

The cyclic rotations of s are:

"abca": No two adjacent characters are equal, so score = 0.
"bcaa": The characters at positions 2 and 3 are equal, so score = 1.
"caab": The characters at positions 1 and 2 are equal, so score = 1.
"aabc": The characters at positions 0 and 1 are equal, so score = 1.
Since score equals k for only 1 cyclic rotation of s, the answer is 1.

 

Constraints:

2 <= n == s.length <= 100
s only consists of lowercase English letters.
0 <= k <= n - 1
*/

function countRotations(s: string, k: number): number {
    let str = s;
    let n = s.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        str = str.slice(1,n) + str.slice(0,1);
        let c = 0;
        for (let j = n-1; j > 0; j--) {
            if (str[j] == str[j-1]) c++;
        }
        if (c == k) cnt++;
    }
    return cnt;
};

function countRotations2(s: string, k: number): number {
    const n = s.length;
    const doubled = s + s;

    // eq[i]: doubled 中位置 i 与 i+1 是否构成相等相邻对
    const eq: number[] = new Array(2 * n - 1);
    for (let i = 0; i < 2 * n - 1; i++) {
        eq[i] = doubled[i] === doubled[i + 1] ? 1 : 0;
    }

    // 旋转偏移 t 的窗口为 doubled[t .. t+n-1]，其得分 = 区间 [t, t+n-2] 的 eq 之和
    // 先算偏移 0（原串）的得分
    let score = 0;
    for (let i = 0; i < n - 1; i++) score += eq[i];

    let ans = score === k ? 1 : 0;
    for (let t = 1; t < n; t++) {
        // 窗口右移：去掉左端一对 eq[t-1]，加入右端一对 eq[t+n-2]
        score += eq[t + n - 2] - eq[t - 1];
        if (score === k) ans++;
    }
    return ans;
}
