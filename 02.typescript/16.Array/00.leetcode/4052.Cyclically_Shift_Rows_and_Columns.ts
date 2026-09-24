/*
4052. Cyclically Shift Rows and Columns
Solved
Easy
Topics
premium lock icon
Companies
Hint
You are given an integer n, a 2D integer array grid of size n x n, and two integer arrays rowShift and colShift, each of length n, where:

rowShift[i] represents the number of positions to cyclically shift the ith row of grid to the left.
colShift[j] represents the number of positions to cyclically shift the jth column of grid upward.
First, cyclically shift each row according to rowShift, then cyclically shift each column of the resulting grid according to colShift.

Return the resulting grid after performing all the shifts.

A cyclic left shift of a row by k positions moves the element at column j to column (j - k + n) % n. All other rows remain unchanged.

A cyclic upward shift of a column by k positions moves the element at row i to row (i - k + n) % n. All other columns remain unchanged.

 

Example 1:

Input: n = 2, grid = [[1,2],[3,4]], rowShift = [1,0], colShift = [0,1]

Output: [[2,4],[3,1]]

Explanation:

The grid changes as follows:



Example 2:

Input: n = 3, grid = [[1,2,3],[4,5,6],[7,8,9]], rowShift = [1,2,0], colShift = [2,2,1]

Output: [[7,8,5],[2,3,9],[6,4,1]]

Explanation:

The grid changes as follows:



 

Constraints:

1 <= n == grid.length == grid[i].length <= 10
1 <= grid[i][j] <= 100
rowShift.length == colShift.length == n
0 <= rowShift[i], colShift[i] < n
*/
function cyclicShift(n: number, grid: number[][], rowShift: number[], colShift: number[]): number[][] {
    for (let i = 0; i < n; i++) {
        const j = rowShift[i];
        const row = [...grid[i].slice(j), ...grid[i].slice(0,j)];
        grid[i] = row;
    }
    for (let j = 0; j < n; j++) {
        const i = colShift[j];
        let col = grid.map(row => row[j]);
        col = [...col.slice(i), ...col.slice(0,i)];
        for (let i = 0; i < n; i++) {
            grid[i][j] = col[i];
        }
    }
    return grid;
};

function cyclicShift2(n: number, grid: number[][], rowShift: number[], colShift: number[]): number[][] {
    const shifted = grid.map((row, i) => {
        const k = rowShift[i];
        return [...row.slice(k), ...row.slice(0, k)];
    });
    const result: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
    for (let j = 0; j < n; j++) {
        const k = colShift[j];
        for (let i = 0; i < n; i++) {
            result[i][j] = shifted[(i + k) % n][j];
        }
    }
    return result;
}
