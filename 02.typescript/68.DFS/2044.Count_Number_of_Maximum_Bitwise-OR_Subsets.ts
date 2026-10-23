/*
2044. Count Number of Maximum Bitwise-OR Subsets
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given an integer array nums, find the maximum possible bitwise OR of a subset of nums and return the number of different non-empty subsets with the maximum bitwise OR.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b. Two subsets are considered different if the indices of the elements chosen are different.

The bitwise OR of an array a is equal to a[0] OR a[1] OR ... OR a[a.length - 1] (0-indexed).

 

Example 1:

Input: nums = [3,1]
Output: 2
Explanation: The maximum possible bitwise OR of a subset is 3. There are 2 subsets with a bitwise OR of 3:
- [3]
- [3,1]
Example 2:

Input: nums = [2,2,2]
Output: 7
Explanation: All non-empty subsets of [2,2,2] have a bitwise OR of 2. There are 23 - 1 = 7 total subsets.
Example 3:

Input: nums = [3,2,1,5]
Output: 6
Explanation: The maximum possible bitwise OR of a subset is 7. There are 6 subsets with a bitwise OR of 7:
- [3,5]
- [3,1,5]
- [3,2,5]
- [3,2,1,5]
- [2,5]
- [2,1,5]
 

Constraints:

1 <= nums.length <= 16
1 <= nums[i] <= 105
*/
// let max: number = -1;
// let cnt = 0;
// function countMaxOrSubsets(nums: number[]): number {
//     max = -1;
//     cnt = 0;
//     dfs(nums, 0, 0);
//     return cnt;
// };

// function dfs(nums: number[], start: number, prod: number) {
//     if (start === nums.length) return;
//     for (let i = start; i < nums.length; i++) {
//         const x = prod | nums[i];
//         if (x > max) {
//             max = x;
//             cnt = 0;
//             cnt++;
//         } else if (x === max) {
//             cnt++;
//         }
//         dfs(nums, i+1, x);
//     }
// }
function countMaxOrSubsets(nums: number[]): number {
    const maxOr = nums.reduce((a, b) => a | b, 0);
    let cnt = 0;

    const dfs = (i: number, curOr: number) => {
        if (i === nums.length) {
            if (curOr === maxOr) cnt++;
            return;
        }
        // 剪枝：已达到最大 OR，后面每个元素选/不选都算
        if (curOr === maxOr) {
            cnt += 1 << (nums.length - i);
            return;
        }
        dfs(i + 1, curOr | nums[i]); // 选
        dfs(i + 1, curOr);            // 不选
    };

    dfs(0, 0);
    return cnt - 1; // 去掉空集（空集 OR=0，仅当 maxOr===0 时才有；本题 nums[i]≥1，maxOr≥1，空集不会命中，可直接 return cnt 且入口别从空集计数）
}
