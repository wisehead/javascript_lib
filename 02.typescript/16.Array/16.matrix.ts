/*
1282. Group the People Given the Group Size They Belong To
Solved
Medium
Topics
premium lock icon
Companies
Hint
There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to n - 1.

You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in. For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

Return a list of groups such that each person i is in a group of size groupSizes[i].

Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

 

Example 1:

Input: groupSizes = [3,3,3,3,3,1,3]
Output: [[5],[0,1,2],[3,4,6]]
Explanation: 
The first group is [5]. The size is 1, and groupSizes[5] = 1.
The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.
Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].
Example 2:

Input: groupSizes = [2,1,3,3,3,2]
Output: [[1],[0,5],[2,3,4]]
 

Constraints:

groupSizes.length == n
1 <= n <= 500
1 <= groupSizes[i] <= n
*/
function groupThePeople(groupSizes: number[]): number[][] {
    const n = groupSizes.length;
    // const buckets: number[][] = Array.from({ length: n + 1 }, () => []);
    const vv: number[][] = new Array(n + 1);
    for (let i = 0; i <= n; i++) vv[i] = [];
    for (let i = 0; i < n; i++) {
        const x = groupSizes[i];
        vv[x].push(i);
        // console.log(`i:${i},x:${x}, vv[x]:${vv[x]}`);
    }

    const res: number[][] = [];
    for (let k = 1; k < n+1; k++) {
        const v = vv[k];
        // console.log(`k:${k}, v:${v}`);
        if (v.length === 0) continue;
        const step = k;
        let i = 0;
        while (i < v.length) {
            const vec: number[] = [];
            for (let j = 0; j < step; j++) {
                vec.push(v[i+j]);
            }
            res.push(vec);
            i += step;
        }
    }
    return res;
};

function groupThePeople2(groupSizes: number[]): number[][] {
  const buckets: number[][] = [];
  const res: number[][] = [];
  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];
    if (!buckets[size]) buckets[size] = [];
    buckets[size].push(i);
    if (buckets[size].length === size) {
      res.push(buckets[size]);
      buckets[size] = [];
    }
  }
  return res;
}

export { groupThePeople, groupThePeople2 };