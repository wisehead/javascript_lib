/*
4038. Count Integers Appearing in a Single Block
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer array nums.

An integer x is special if all occurrences of x in nums appear in a single contiguous block.

Return the number of distinct special integers in nums.



Example 1:

Input: nums = [1,2,2,1]

Output: 1

Explanation:

1 appears at indices 0 and 3, forming two separate blocks, so it is not special.
2 appears in a single contiguous block at indices [1, 2], so it is special.
Therefore, there is one special integer.

Example 2:

Input: nums = [3,3,1,2,2,1]

Output: 2

Explanation:

3 appears in a single contiguous block at indices [0, 1], so it is special.
1 appears at indices 2 and 5, forming two separate blocks, so it is not special.
2 appears in a single contiguous block at indices [3, 4], so it is special.
Therefore, there are two special integers.



Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/
function countSpecialIntegers2(nums: number[]): number {
    let mp = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (mp.has(x)) {
            // 已通过 has() 确认键存在，使用非空断言收窄类型
            const v = mp.get(x)!;
            if (v === -1) continue;
            if (i === v + 1) {
                mp.set(x, i);
            } else {
                mp.set(x, -1);
            }
        } else {
            mp.set(x, i);
        }
    }
    let cnt = 0;
    for (let value of mp.values()) {
        if (value != -1) cnt++;
    }
    return cnt;
};

function countSpecialIntegers3(nums: number[]): number {
    const special = new Set<number>();
    const broken = new Set<number>();
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (i > 0 && nums[i - 1] === x) continue;   // 同一块内部，跳过
        if (special.delete(x)) broken.add(x);        // 第二个块 → 作废
        else if (!broken.has(x)) special.add(x);
    }
    return special.size;
}
