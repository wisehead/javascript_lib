/*
4065. Rearrange Array by Removing Distinct Values
Solved
Easy
premium lock icon
Companies
You are given an integer array nums.

You start with an empty array ans. Repeat the following operation until nums is empty:

Identify all distinct values currently present in nums.
Remove one occurrence of every distinct value currently in nums, and append those values to ans in ascending order.
Return the array ans.

 

Example 1:

Input: nums = [3,1,3,2,1,3]

Output: [1,2,3,1,3,3]

Explanation:

Operation	Appended to ans	nums after	ans after
1	1, 2, 3	[3, 1, 3]	[1, 2, 3]
2	1, 3	[3]	[1, 2, 3, 1, 3]
3	3	[]	[1, 2, 3, 1, 3, 3]
nums is now empty, so the answer is [1, 2, 3, 1, 3, 3].

Example 2:

Input: nums = [7,7,4,4,4]

Output: [4,7,4,7,4]

Explanation:

Operation	Appended to ans	nums after	ans after
1	4, 7	[7, 4, 4]	[4, 7]
2	4, 7	[4]	[4, 7, 4, 7]
3	4	[]	[4, 7, 4, 7, 4]
nums is now empty, so the answer is [4, 7, 4, 7, 4].

 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/
function rearrangeArray(nums: number[]): number[] {
    let arr = new Array(101).fill(0);
    let n = nums.length;
    for (let x of nums) {
        arr[x]++;
    }
    let ans:number[] = new Array();
    while (n > 0) {
        for (let i = 1; i < 101; i++) {
            if (arr[i]) {
                ans.push(i);
                arr[i]--;
                n--;
            }
        }
    }
    return ans;
};