/*
4000. Largest Integer With Given Digit Sum
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given two non-negative integers n and s.

Return the largest integer that has at most n digits and whose sum of digits is s. If no such integer exists, return -1.

 

Example 1:

Input: n = 2, s = 9

Output: 90

Explanation:

The largest integer with at most 2 digits that has a sum of digits of 9 is 90.

Example 2:

Input: n = 2, s = 19

Output: -1

Explanation:

There is no integer with at most 2 digits that has a sum of digits of 19, so the answer is -1.

Example 3:

Input: n = 5, s = 0

Output: 0

Explanation:

The only non-negative integer whose digits sum to 0 is 0.

 

Constraints:

1 <= n <= 5
0 <= s <= 100
 

Seen this question in a real interview before?
1/6
Yes
No
Accepted
55,629/90.6K
Acceptance Rate
61.4%
*/

function largestInteger(n: number, s: number): number {
    if (s > n*9) return -1;
    let sum = 0;
    while (n-- > 0) {
        if (s >= 9) {
            sum = sum*10 + 9;
            s -= 9;
        } else {
            sum = sum*10 + s;
            s = 0;
        }
    }
    return sum;
}

function largestInteger2(n: number, s: number): number {
    if (s > n * 9) return -1;

    let ans = 0;
    let rest = s;
    for (let i = 0; i < n; i++) {
        const digit = Math.min(rest, 9);
        ans = ans * 10 + digit;
        rest -= digit;
    }
    return ans;
}
