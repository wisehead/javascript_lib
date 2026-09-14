/*
4048. Count Values With Equally Spaced Occurrences I
Solved
Easy
premium lock icon
Companies
Hint
You are given an integer array nums.

An integer x is called special if:

x appears exactly three times in nums.
All three occurrences of x are equally spaced in nums. In other words, if all occurrences of x are at indices i1 < i2 < i3, then i2 - i1 = i3 - i2.
Return the number of distinct special integers in nums.

 

Example 1:

Input: nums = [1,8,1,5,1,5,8,5]

Output: 2

Explanation:

1 is special because it occurs exactly three times at equally spaced indices 0, 2, and 4.
5 is special because it occurs exactly three times at equally spaced indices 3, 5, and 7.
8 is not special because it occurs only twice.
Therefore, the answer is 2.

Example 2:

Input: nums = [8,8,8,8]

Output: 0

Explanation:

8 is not special because it does not occur exactly three times. Therefore, the answer is 0.

Example 3:

Input: nums = [8,6,6,8,8]

Output: 0

Explanation:

8 occurs at indices 0, 3, and 4, which are not equally spaced. 6 occurs only twice. Therefore, no integer is special.

 

Constraints:

3 <= nums.length <= 100
1 <= nums[i] <= 100
*/
function countSpecialIntegers(nums: number[]): number {
    let mp = new Map<number, number[]>();
    //mp.set(m, (mp.get(m) ?? 0) + 1);
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let vec = (mp.get(n) ?? []);
        vec.push(i);
        mp.set(n, vec);
    }
    let cnt = 0;
    for (let [key, vec] of mp) {
        if (vec.length == 3 && 2*vec[1] == vec[0]+vec[2]) cnt++;
    }
    return cnt;
};

//烧脑，但是高级版本
function countSpecialIntegers2(nums: number[]): number {
    const stat = new Map<number, { cnt: number; first: number; last: number; sum: number }>();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const s = stat.get(n);
        if (s === undefined) {
            stat.set(n, { cnt: 1, first: i, last: i, sum: i });
        } else {
            s.cnt++;
            s.last = i;
            s.sum += i;
        }
    }
    let cnt = 0;
    for (const { cnt: c, first, last, sum } of stat.values()) {
        if (c === 3 && 3 * (sum - first - last) === sum) cnt++;
    }
    return cnt;
}
