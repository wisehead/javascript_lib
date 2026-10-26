/*
You are given a positive integer n.

A binary string x is valid if all substrings of x of length 2 contain at least one "1".

Return all valid strings with length n, in any order.

 

Example 1:

Input: n = 3

Output: ["010","011","101","110","111"]

Explanation:

The valid strings of length 3 are: "010", "011", "101", "110", and "111".

Example 2:

Input: n = 1

Output: ["0","1"]

Explanation:

The valid strings of length 1 are: "0" and "1".

 

Constraints:

1 <= n <= 18
*/
function validStrings(n: number): string[] {
    const res: string[] = [];
    const dfs = (i: number, path: string) => {
        if (i == n) {
            res.push(path);
            return;
        }

        if (i !== 0 && path.at(-1) === '0'){
            dfs(i+1, path+"1");
        } else {
            dfs(i+1, path+"0");
            dfs(i+1, path+"1");
        }
    };
    let path = "";
    dfs(0, path);
    return res;
};

function validStrings2(n: number): string[] {
    const res: string[] = [];
    const path: string[] = [];

    const dfs = (prevZero: boolean) => {
        if (path.length === n) {
            res.push(path.join(""));
            return;
        }
        path.push("1");
        dfs(false);
        path.pop();

        if (!prevZero) {          // 上一位不是 0，才能填 0
            path.push("0");
            dfs(true);
            path.pop();
        }
    };

    dfs(false);                   // 起始位置没有前驱，视为「非 0」
    return res;
}
