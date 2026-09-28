/*
4056. Number of Intersecting Interval Pairs I
Solved
Easy
premium lock icon
Companies
Hint
You are given a 2D integer array intervals of n elements, where intervals[i] = [starti, endi] represents the closed interval from starti to endi.

Return the number of pairs of indices (i, j) such that 0 <= i < j < n and intervals[i] and intervals[j] intersect.

Two intervals intersect if they have at least one point in common, including when they only share an endpoint.

 

Example 1:

Input: intervals = [[1,2],[2,3],[3,4]]

Output: 2

Explanation:

There are 2 intersecting interval pairs:

Intervals [1, 2] and [2, 3] intersect at the point 2.
Intervals [2, 3] and [3, 4] intersect at the point 3.
Example 2:

Input: intervals = [[1,5],[2,4],[3,6]]

Output: 3

Explanation:

There are 3 intersecting interval pairs:

The intersection of [1, 5] and [2, 4] is [2, 4].
The intersection of [1, 5] and [3, 6] is [3, 5].
The intersection of [2, 4] and [3, 6] is [3, 4].
Example 3:

Input: intervals = [[1,2],[3,4],[5,6]]

Output: 0

Explanation:

There are no intersecting interval pairs. Hence, the answer is 0.

 

Constraints:

2 <= n == intervals.length <= 100
intervals[i] = [starti, endi]
0 <= starti <= endi <= 100
*/
function countIntersectingIntervals(intervals: number[][]): number {
    const col2 = [...intervals].sort((a, b) => a[1] - b[1]);
    const vv = [...col2].sort((a, b) => a[0] - b[0]);
    const n = intervals.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        // console.log(`i:${i}, [${vv[i][0]}, ${vv[i][1]}]`);
        for (let j = i+1; j < n; j++) {
            if (vv[j][0] <= vv[i][1]) cnt++;
            else break;
        }
    }
    return cnt;
};

function countIntersectingIntervals2(intervals: number[][]): number {
    const vv = [...intervals].sort((a, b) => a[0] - b[0]);
    const n = vv.length;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        const endI = vv[i][1];
        for (let j = i + 1; j < n && vv[j][0] <= endI; j++) cnt++;
    }
    return cnt;
}



function countIntersectingIntervals3(intervals: number[][]): number {
    const n = intervals.length;
    const starts = intervals.map(([s]) => s).sort((a, b) => a - b);

    let disjoint = 0;
    for (const [, end] of intervals) {
        // 第一个 start > end 的位置，其后全部与该区间不相交
        let lo = 0, hi = n;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (starts[mid] > end) hi = mid;
            else lo = mid + 1;
        }
        disjoint += n - lo;
    }
    return (n * (n - 1)) / 2 - disjoint;
}
