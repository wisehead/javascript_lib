/*
3912. Valid Elements in an Array
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer array nums.

An element nums[i] is considered valid if it satisfies at least one of the following conditions:

It is strictly greater than every element to its left.
It is strictly greater than every element to its right.
The first and last elements are always valid.

Return an array of all valid elements in the same order as they appear in nums.

 

Example 1:

Input: nums = [1,2,4,2,3,2]

Output: [1,2,4,3,2]

Explanation:

nums[0] and nums[5] are always valid.
nums[1] and nums[2] are strictly greater than every element to their left.
nums[4] is strictly greater than every element to its right.
Thus, the answer is [1, 2, 4, 3, 2].
Example 2:

Input: nums = [5,5,5,5]

Output: [5,5]

Explanation:

The first and last elements are always valid.
No other elements are strictly greater than all elements to their left or to their right.
Thus, the answer is [5, 5].
Example 3:

Input: nums = [1]

Output: [1]

Explanation:

Since there is only one element, it is always valid. Thus, the answer is [1].

 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

function findValidElements(nums: number[]): number[] {
    let n = nums.length;
    let left: number[] = new Array(n).fill(nums[0]);
    let right: number[] = new Array(n).fill(nums[n-1]);
    let res:number[] = new Array();
    let maxv = nums[0];
    for (let i = 1; i < n; i++) {
        maxv = Math.max(maxv, nums[i]);
        left[i] = maxv;
    }
    maxv = nums[n-1];
    for (let i = n-1; i >= 0; i--) {
        maxv = Math.max(maxv, nums[i]);
        right[i] = maxv;
    }
    for (let i = 0; i < n;i++) {
        if (i == 0 || i == n-1) {
            res.push(nums[i]);
            continue;
        }
        if (nums[i] > left[i-1] || nums[i] > right[i+1]) {
            res.push(nums[i]);
        }
    }
    return res;
    
};

function findValidElements2(nums: number[]): number[] {
    const n = nums.length;

    // suffixMax[i] = max(nums[i..n-1])，末位之后视为 -Infinity
    const suffixMax: number[] = new Array(n + 1).fill(-Infinity);
    for (let i = n - 1; i >= 0; i--) {
        suffixMax[i] = Math.max(suffixMax[i + 1], nums[i]);
    }

    const res: number[] = [];
    let prefixMax = -Infinity;           // nums[0] 左侧为空 → 空真成立
    for (let i = 0; i < n; i++) {
        if (nums[i] > prefixMax || nums[i] > suffixMax[i + 1]) {
            res.push(nums[i]);
        }
        prefixMax = Math.max(prefixMax, nums[i]);
    }
    return res;
}
