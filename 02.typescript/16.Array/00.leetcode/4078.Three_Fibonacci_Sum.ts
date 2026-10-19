/*

Code
Testcase
Testcase
Test Result
4078. Three Fibonacci Sum
Solved
Easy
premium lock icon
Companies
Hint
You are given an integer n.

The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two numbers. Its first few terms are 0, 1, 1, 2, 3, 5, 8, 13, ....

Return true if n can be expressed as the sum of three consecutive terms in the Fibonacci sequence, and false otherwise.

 

Example 1:

Input: n = 16

Output: true

Explanation:

The three consecutive terms 3, 5, and 8 have a sum of 3 + 5 + 8 = 16.

Example 2:

Input: n = 8

Output: false

Explanation:

Although 1 + 2 + 5 = 8, these terms are not consecutive in the Fibonacci sequence. No three consecutive terms have a sum of 8.

Example 3:

Input: n = 2

Output: true

Explanation:

The first three terms have a sum of 0 + 1 + 1 = 2.

 

Constraints:

1 <= n <= 109
*/
// function threeFibonacciSum(n: number): boolean {
//     const nums: number[] = [0, 1, 1];
//     let sum = nums.at(-1)*2;
//     while (sum < n) {
//         nums.push(nums.at(-1) + nums.at(-2));
//         sum = nums.at(-1)*2;
//     } 
//     if (sum === n) return true;
//     return false;
// };

function threeFibonacciSum(n: number): boolean {
    // F(k) + F(k+1) + F(k+2) = 2 * F(k+2)，问题转化为：n/2 是否为斐波那契数
    if (n % 2 !== 0) return false;
    const target = n / 2;
    let a = 1, b = 1;
    while (b < target) {
        [a, b] = [b, a + b];
    }
    return b === target;
}
