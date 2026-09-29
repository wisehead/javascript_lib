/*

Code
Testcase
Testcase
Test Result
4061. Minimum Queen Moves to Reach Target
Solved
Easy
premium lock icon
Companies
There is an 8 x 8 empty chessboard with 1-indexed rows and columns.

You are given an array source = [sr, sc] representing the starting position of a queen, and an array target = [tr, tc] representing the target position.

In one move, the queen travels one or more squares along a single row, column, or diagonal, staying within the board.

Return the minimum number of moves for the queen to land exactly on target.

 

Example 1:

Input: source = [8,1], target = [1,8]

Output: 1

Explanation:

​​​​​​​​​​​​​​

A single diagonal move takes the queen straight from (8, 1) to (1, 8).

Example 2:

Input: source = [4,2], target = [1,3]

Output: 2

Explanation:

​​​​​​​

The queen moves from (4, 2) to (4, 3), then from (4, 3) to (1, 3), reaching the target in 2 moves.

Example 3:

Input: source = [1,1], target = [1,1]

Output: 0

Explanation:

The queen is already at the target position, so no moves are needed.

 

Constraints:​​​​​​​

source == [sr, sc]
target == [tr, tc]
1 <= sr, sc, tr, tc <= 8
*/

function minQueenMoves(source: number[], target: number[]): number {
    if (source[0] ===target[0] && source[1] ===target[1]) return 0;

    if (source[0] ===target[0] || source[1] ===target[1] || Math.abs(source[0] - target[0]) === Math.abs(target[1] - source[1])) return 1;

    return 2;

};


function minQueenMoves2(source: number[], target: number[]): number {
    const [sr, sc] = source;
    const [tr, tc] = target;

    if (sr === tr && sc === tc) return 0;

    const dr = Math.abs(sr - tr);
    const dc = Math.abs(sc - tc);
    // 同行 / 同列 / 同对角线，一步可达
    if (dr === 0 || dc === 0 || dr === dc) return 1;

    // 空棋盘上先横再竖，最多两步
    return 2;
}
