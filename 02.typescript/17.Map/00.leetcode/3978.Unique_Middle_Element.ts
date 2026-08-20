/*
3978. Unique Middle Element
Solved
Easy
premium lock icon
Companies
Hint
You are given an integer array nums of odd length n.

Return true if the middle element of nums appears exactly once in the array. Otherwise return false.

 

Example 1:

Input: nums = [1,2,3]

Output: true

Explanation:

The middle element of nums is 2, which appears exactly once.

Thus, the answer is true.

Example 2:

Input: nums = [1,2,2]

Output: false

Explanation:

The middle element of nums is 2, which appears twice.

Thus, the answer is false.

 

Constraints:

1 <= n == nums.length <= 100
n is odd.
1 <= nums[i] <= 100
*/

function isMiddleElementUnique(nums: number[]): boolean {
    const mp = new Map<number, number>();
    for (let x of nums) {
        mp.set(x, (mp.get(x) ?? 0) + 1);
    } 
    // let m = Math.floor((nums.length - 1) / 2);
    let m = nums.length>>1;
    if (mp.get(nums[m]) > 1) return false;
    return true;
};