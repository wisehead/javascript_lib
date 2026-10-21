/*
4074. Maximum Product Pair With Target Sum
Solved
Easy
premium lock icon
Companies
Hint
You are given an integer array nums and an integer target.

A pair of distinct indices (i, j) is valid if:

nums[i] + nums[j] == target
nums[i] > nums[j]
Return a valid pair [i, j] whose product nums[i] * nums[j] is maximum among all valid pairs. If no valid pair exists, return [-1, -1].

If multiple valid pairs achieve the maximum product, you may return any of them.

 

Example 1:

Input: nums = [1,2,3,4], target = 5

Output: [2,1]

Explanation:

There are 2 valid pairs:

No.	(i, j)	nums[i]	nums[j]	Sum	Product
1	(3, 0)	4	1	5	4
2	(2, 1)	3	2	5	6
Both pairs sum to 5 and satisfy nums[i] > nums[j]. The second pair has the larger product, 3 * 2 = 6, so the answer is [2, 1].

Example 2:

Input: nums = [-3,-1,4,2], target = 1

Output: [3,1]

Explanation:

There are 2 valid pairs:

No.	(i, j)	nums[i]	nums[j]	Sum	Product
1	(2, 0)	4	-3	1	-12
2	(3, 1)	2	-1	1	-2
Since -2 > -12, the pair at indices (3, 1) is chosen and the answer is [3, 1].

Example 3:

Input: nums = [3,3,5], target = 6

Output: [-1,-1]

Explanation:

​​​​​​​No valid pair exists, since nums[0] and nums[1] sum to 6 but are equal.

 

Constraints:

2 <= nums.length <= 100
-100 <= nums[i], target <= 100​​​​​​​
*/
function maxProductPair(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    let max = Number.NEGATIVE_INFINITY;
    let a = -1;
    let b = -1;
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i);
        }
    }

    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (nums[i] > x && map.has(x) && nums[i]*x > max) {
            max = nums[i]*x;
            a = i;
            b = map.get(x)!;
        }
    }

    return [a, b];
};

function maxProductPair2(nums: number[], target: number): [number, number] {
    const firstIndex = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        if (!firstIndex.has(nums[i])) firstIndex.set(nums[i], i);
    }

    let maxProduct = -Infinity;
    let bestI = -1;
    let bestJ = -1;
    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (nums[i] <= x || !firstIndex.has(x)) continue;
        const product = nums[i] * x;
        if (product > maxProduct) {
            maxProduct = product;
            bestI = i;
            bestJ = firstIndex.get(x)!;
        }
    }
    return [bestI, bestJ];
}
