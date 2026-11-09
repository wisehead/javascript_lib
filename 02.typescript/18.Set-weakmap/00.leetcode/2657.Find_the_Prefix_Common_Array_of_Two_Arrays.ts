/*
2657. Find the Prefix Common Array of Two Arrays
Solved
Medium
Topics
premium lock icon
Companies
Hint
You are given two 0-indexed integer permutations A and B of length n.

A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.

Return the prefix common array of A and B.

A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.

 

Example 1:

Input: A = [1,3,2,4], B = [3,1,2,4]
Output: [0,2,3,4]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: 1 and 3 are common in A and B, so C[1] = 2.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
At i = 3: 1, 2, 3, and 4 are common in A and B, so C[3] = 4.
Example 2:

Input: A = [2,3,1], B = [3,1,2]
Output: [0,1,3]
Explanation: At i = 0: no number is common, so C[0] = 0.
At i = 1: only 3 is common in A and B, so C[1] = 1.
At i = 2: 1, 2, and 3 are common in A and B, so C[2] = 3.
 

Constraints:

1 <= A.length == B.length == n <= 50
1 <= A[i], B[i] <= n
It is guaranteed that A and B are both a permutation of n integers.
*/
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length;
    const res = new Array(n).fill(0);
    const s1 = new Set<number>();
    const s2 = new Set<number>();
    if (A[0] === B[0]) res[0] = 1;
    s1.add(A[0]);
    s2.add(B[0]);
    for (let i = 1; i < n; i++) {
        let cnt = 0;
        if (s1.has(B[i])) cnt++;    
        s2.add(B[i]);
        if (s2.has(A[i])) cnt++;
        s1.add(A[i]);
        res[i] = cnt+res[i-1];
    }
    return res;
};

function findThePrefixCommonArray2(A: number[], B: number[]): number[] {
    const n = A.length;
    const seenA = new Set<number>();
    const seenB = new Set<number>();
    const res = new Array<number>(n);
    let common = 0;

    for (let i = 0; i < n; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);
        // B[i] 刚进入两侧前缀 → +1
        if (seenA.has(B[i])) common++;
        // A[i] 刚进入两侧前缀；A[i]===B[i] 已在上一行计过，避免双计
        if (A[i] !== B[i] && seenB.has(A[i])) common++;
        res[i] = common;
    }
    return res;
}
