/*
1415. The k-th Lexicographical String of All Happy Strings of Length n
Solved
Medium
Topics
premium lock icon
Companies
Hint
A happy string is a string that:

consists only of letters of the set ['a', 'b', 'c'].
s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.

Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.

Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

 

Example 1:

Input: n = 1, k = 3
Output: "c"
Explanation: The list ["a", "b", "c"] contains all happy strings of length 1. The third string is "c".
Example 2:

Input: n = 1, k = 4
Output: ""
Explanation: There are only 3 happy strings of length 1.
Example 3:

Input: n = 3, k = 9
Output: "cab"
Explanation: There are 12 different happy string of length 3 ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"]. You will find the 9th string = "cab"
 

Constraints:

1 <= n <= 10
1 <= k <= 100
*/
function getHappyString(n: number, k: number): string {
    const res: number[][] = [];
    const dfs = (n: number, k: number, path: number[]) => {
        if (path.length >= n) {
            res.push(path);
            return;
        }
        if (res.length >= k) return;
        for (let i = 0; i < 3; i++) {
            if (path.length != 0 && i === path.at(-1)) {
                continue;
            } else {
                const p = path.slice();
                p.push(i);
                dfs(n, k, p);
            }
        }
    }

    const arr = ['a', 'b', 'c'];
    const path: number[] = [];
    dfs(n, k, path);
    let ret = "";
    if (res.length < k) return ret;
    for (let x of res[k-1]) {
        ret += arr[x];
    }
    return ret;
};

function getHappyString2(n: number, k: number): string {
  const letters = ['a', 'b', 'c'];
  const path: string[] = [];
  let count = 0;
  let ans = '';

  const dfs = (): boolean => {
    if (path.length === n) {
      count++;
      if (count === k) {
        ans = path.join('');
        return true;
      }
      return false;
    }
    for (const ch of letters) {
      if (path.length && path[path.length - 1] === ch) continue;
      path.push(ch);
      if (dfs()) return true;
      path.pop();
    }
    return false;
  };

  dfs();
  return ans;
}
