/*
807. Max Increase to Keep City Skyline
Solved
Medium
Topics
premium lock icon
Companies
There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.

A city's skyline is the outer contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different.

We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city's skyline from any cardinal direction.

Return the maximum total sum that the height of the buildings can be increased by without changing the city's skyline from any cardinal direction.

 

Example 1:


Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: The building heights are shown in the center of the above image.
The skylines when viewed from each cardinal direction are drawn in red.
The grid after increasing the height of buildings without affecting skylines is:
gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]
Example 2:

Input: grid = [[0,0,0],[0,0,0],[0,0,0]]
Output: 0
Explanation: Increasing the height of any building will result in the skyline changing.
 

Constraints:

n == grid.length
n == grid[r].length
2 <= n <= 50
0 <= grid[r][c] <= 100
*/
function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const map1 = new Map<number, number>();
    const map2 = new Map<number, number>();
    const m = grid.length;
    const n = grid[0].length;
    for (let i = 0; i < m; i++) {
        const max = Math.max(...grid[i]);
        map1.set(i, max);
    }
    for (let j = 0; j < n; j++) {
        let max = 0;
        for (let i = 0; i < m; i++) {
            max = Math.max(max, grid[i][j]);
        }
        map2.set(j, max);
    }
    let cnt = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const min = Math.min(map1.get(i)!, map2.get(j)!);
            cnt += (min-grid[i][j]);
        }
    }
    return cnt;
};

function maxIncreaseKeepingSkyline2(grid: number[][]): number {
    const n = grid.length;
    const rowMax = new Array<number>(n).fill(0);
    const colMax = new Array<number>(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rowMax[i] = Math.max(rowMax[i], grid[i][j]);
            colMax[j] = Math.max(colMax[j], grid[i][j]);
        }
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            ans += Math.min(rowMax[i], colMax[j]) - grid[i][j];
        }
    }
    return ans;
}
