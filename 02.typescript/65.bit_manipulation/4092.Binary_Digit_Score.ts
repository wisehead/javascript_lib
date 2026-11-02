/*

Code
Testcase
Testcase
Test Result
4092. Binary Digit Score
Solved
Easy
premium lock icon
Companies
Hint
You are given two integers a and b.

Let s1 and s2 be the number of set bits in the binary representations of a and b, respectively.

The score of these integers is defined as follows:

If s1 >= s2, the score is s1 * s2.
Otherwise, the score is s2 / s1 using integer division.
Return an integer representing the score of a and b.

 

Example 1:

Input: a = 14, b = 6

Output: 6

Explanation:

The binary representation of a = 14 is "1110", so s1 = 3.
The binary representation of b = 6 is "110", so s2 = 2.
Since s1 > s2, the score of a and b is s1 * s2 = 3 * 2 = 6.
Example 2:

Input: a = 5, b = 15

Output: 2

Explanation:

The binary representation of a = 5 is "101", so s1 = 2.
The binary representation of b = 15 is "1111", so s2 = 4.
Since s1 < s2, the score of a and b is s2 / s1 = 4 / 2 = 2.
Example 3:

Input: a = 10, b = 12

Output: 4

Explanation:

The binary representation of a = 10 is "1010", so s1 = 2.
The binary representation of b = 12 is "1100", so s2 = 2.
Since s1 == s2, the score of a and b is s1 * s2 = 2 * 2 = 4.
 

Constraints:

1 <= a, b <= 100
*/
function calculateScore2(a: number, b: number): number {
    const sa = a.toString(2);
    const sb = b.toString(2);
    let s1 = 0;
    let s2 = 0;
    for (let c of sa) {
        if (c === "1") s1++;
    }
    for (let c of sb) {
        if (c === "1") s2++;
    }
    if (s1 >= s2) {
        return s1*s2;
    }
    return Math.floor(s2/s1);
};

function calculateScore(a: number, b: number): number {
    const s1 = bitCount(a);
    const s2 = bitCount(b);
    return s1 >= s2 ? s1 * s2 : Math.floor(s2 / s1);
}

/*
这是 Brian Kernighan 数 1 比特的经典写法，作用：统计 n 的二进制里有多少个 1。

核心技巧：n &= n - 1
每次执行都会清掉最低位的那个 1，其它位不变。

为什么？看二进制：

n 末尾到最低位 1 之前是一串 0
n - 1 会把那个最低位 1 变成 0，后面的 0 变成 1
再 &（按位与）：那个位置变成 0，更高位保持原样
例：n = 14（1110）

轮次	n（二进制）	n-1	n & (n-1)	说明
开始	1110	—	—	有 3 个 1
1	1110	1101	1100	清掉最右边的 1
2	1100	1011	1000	再清一个
3	1000	0111	0000	再清一个 → 变成 0
循环 3 次后 n === 0，c === 3，和题目里 14 有 3 个 set bit 一致。

逐行读

function bitCount(n: number): number {
    let c = 0;           // 已经清掉了几个 1
    while (n) {          // n 非 0 说明还剩至少 1 个 1
        n &= n - 1;      // 清掉最低位的 1
        c++;             // 计数 +1
    }
    return c;            // 循环次数 = 1 的个数
}
循环次数 = 1 的个数，不是二进制总位数
例如 1000（8）只有 1 个 1，只循环 1 次；字符串法还要扫 4 个字符。
while (n)：n 变成 0 就停，因为已经没有 1 了。
和字符串法对比
toString(2) 扫字符	n &= n - 1
思路	先变成 "1110"，再数 '1'	直接在数字上消 1
复杂度	与二进制长度成正比	与 1 的个数成正比
分配	要新建字符串	纯整数运算
对这题两者结果一样；bitCount 更贴合「位运算」目录。

再记一个小例子：n = 5（101）
101 & 100 → 100，c=1
100 & 011 → 000，c=2
→ 返回 2，对应题目 Example 2 的 s1。
*/
function bitCount(n: number): number {
    let c = 0;
    while (n) {
        n &= n - 1;
        c++;
    }
    return c;
}
