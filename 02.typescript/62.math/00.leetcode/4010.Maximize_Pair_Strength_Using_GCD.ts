/*

Code
Testcase
Testcase
Test Result
4010. Maximize Pair Strength Using GCD
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer array nums.

Choose exactly one pair of distinct indices i and j. The strength of the pair is defined as (nums[i] * nums[j]) / gcd(nums[i], nums[j])2.

Return the maximum strength over all possible pairs.

 

Example 1:

Input: nums = [2,3,5]

Output: 15

Explanation:

Choosing i = 1 and j = 2 gives strength (3 * 5) / gcd(3, 5)2 = 15 / 1 = 15, which is the maximum over all pairs.

Example 2:

Input: nums = [4,6,8]

Output: 12

Explanation:

Choosing i = 1 and j = 2 gives strength (6 * 8) / gcd(6, 8)2 = 48 / 4 = 12, which is the maximum over all pairs.

Example 3:

Input: nums = [3,3]

Output: 1

Explanation:

Choosing i = 0 and j = 1 gives strength (3 * 3) / gcd(3, 3)2 = 9 / 9 = 1, the maximum over all pairs.

 

Constraints:

2 <= nums.length <= 2000
1 <= nums[i] <= 105
*/
// function maxPairStrength(nums: number[]): number {
//     const n = nums.length;
//     let max = 0;
//     for (let i = 0; i < n; i++) {
//         for (let j = i+1; j < n; j++) {
//             const g = gcd(nums[i], nums[j]);
//             const ret = nums[i]*nums[j]/(g*g);
//             max = Math.max(max, ret);
//         }
//     }
//     return max;
// };

// function gcd(a: number, b: number): number {
//     if (b > a) [a, b] = [b, a];
//     while (a != b) {
//         a = a - b;
//         if (b > a) [a, b] = [b, a];
//     }
//     return a;
// }

function maxPairStrength(nums: number[]): number {
    const a = [...new Set(nums)].sort((x, y) => y - x);
    // 有重复元素时，该对的 strength 为 1
    let max = a.length < nums.length ? 1 : 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            const prod = a[i] * a[j];
            if (prod <= max) break;          // 后面的 a[j] 更小，无需再看
            const g = gcd(a[i], a[j]);
            max = Math.max(max, prod / (g * g));
        }
    }
    return max;
}

function gcd(a: number, b: number): number {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
}
