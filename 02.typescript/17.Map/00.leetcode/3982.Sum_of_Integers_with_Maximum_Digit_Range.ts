/*
3982. Sum of Integers with Maximum Digit Range
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer array nums.

The digit range of an integer is defined as the difference between its largest digit and smallest digit.

For example, the digit range of 5724 is 7 - 2 = 5.

Return the sum of all integers in nums whose digit range is equal to the maximum digit range among all integers in the array.

 

Example 1:

Input: nums = [5724,111,350]

Output: 6074

Explanation:

i	nums[i]	Largest	Smallest	Digit Range
0	5724	7	2	5
1	111	1	1	0
2	350	5	0	5
The maximum digit range is 5. The integers with this digit range are 5724 and 350, so the answer is 5724 + 350 = 6074.

Example 2:

Input: nums = [90,900]

Output: 990

Explanation:

i	nums[i]	Largest	Smallest	Digit Range
0	90	9	0	9
1	900	9	0	9
The maximum digit range is 9. Both integers have this digit range, so the answer is 90 + 900 = 990.

 

Constraints:

1 <= nums.length <= 100
10 <= nums[i] <= 105
*/
function maxDigitRange(nums: number[]): number {
    const map1 = new Map<number, number>();
    const map2 = new Map<number, number>();
    let maxrange = 0;
    for (let num of nums) {
        let x = num;
        let sum = 0;
        let max = 0;
        let min = 9;
        while (x > 0) {
            let m = x % 10;
            sum += m;
            if (m > max) max = m;
            if (m < min) min = m;
            x = Math.floor(x/10);
        };
        let delta = max - min;
        if (delta > maxrange) maxrange = delta;
        if (map1.get(num)) {
            map2.set(num, map2.get(num)+1);
        }
        else {
            map1.set(num, delta);
            map2.set(num, 1);
        }
            
    }
    let ret = 0;
    for (let [key, value] of map1) {
        // console.log(key, value); 
        if (value == maxrange) {
            ret += key*map2.get(key);
        }           
    }
    return ret;
};

function maxDigitRange2(nums: number[]): number {
    const digitRange = (num: number): number => {
        let max = 0, min = 9;
        for (let x = num; x > 0; x = Math.floor(x / 10)) {
            const d = x % 10;
            if (d > max) max = d;
            if (d < min) min = d;
        }
        return max - min;
    };

    const ranges = nums.map(digitRange);
    const maxRange = Math.max(...ranges);
    return nums.reduce((acc, num, i) => acc + (ranges[i] === maxRange ? num : 0), 0);
}