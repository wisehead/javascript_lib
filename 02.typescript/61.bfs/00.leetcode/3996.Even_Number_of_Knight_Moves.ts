/*
3996. Even Number of Knight Moves

You are given two integer arrays start and target, where each array is of the form [x, y] representing a cell on a standard 8 x 8 chessboard.

Return true if a knight can move from start to target in an even number of moves. Otherwise, return false.

Note: A valid knight move consists of moving two squares in one direction and one square perpendicular to it. The figure below illustrates all eight possible moves from a cell.





Example 1:

Input: start = [1,1], target = [2,2]

Output: true

Explanation:

One possible sequence of moves is (1, 1) -> (3, 2) -> (2, 4) -> (4, 3) -> (2, 2).

The knight reaches the target in 4 moves, which is even. Thus, the answer is true.

Example 2:

Input: start = [4,5], target = [6,6]

Output: false

Explanation:​​​​​​​

It is impossible to reach target = [6, 6] from start = [4, 5] in an even number of moves. Thus, the answer is false.



Constraints:

start.length == target.length == 2
0 <= start[i], target[i] <= 7

*/
// function canReach(start: number[], target: number[]): boolean {
//     let q : number[][] = [];
//     q.push(start);
//     let cnt = 0;
//     var odd = new Set<string>();
//     var even = new Set<string>();
//     even.add(`${start[0]},${start[1]}`);
//     let dirs: number[][] = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
//     while (q.length > 0) {
//         cnt++;
//         let l = q.length;
//         while (l > 0) {
//             let p = q[0];
//             q.shift();
//             for (let dir of dirs) {
//                 let x = p[0] + dir[0];
//                 let y = p[1] + dir[1];
//                 if (x < 0 || x > 7 || y < 0 || y > 7) continue;
//                 if (cnt % 2 == 1) {
//                     if (odd.has(`${x},${y}`)) continue;
//                     odd.add(`${x},${y}`);
//                 } else {
//                     if (x == target[0] && y == target[1]) return true;
//                     if (even.has(`${x},${y}`)) continue;
//                     even.add(`${x},${y}`);
//                 }
//                 q.push([x,y]);
//             }
//             l--;
//         }
//     }
//     return false;
// };

/*

看了文件，你已经把 BFS 注释掉、换成了公式版。下面把这一行的推导完整拆开。

## 一句话

`(x+y) % 2` 就是国际象棋的**格子颜色**。马每走一步必然换色，所以「走了偶数步」⟺「起点终点同色」。这一行就是在判同色。

## 第 1 步：给格子染色

定义 `color(x, y) = (x + y) % 2`。这正是棋盘的黑白相间：

```
y=7  1 0 1 0 1 0 1 0
y=6  0 1 0 1 0 1 0 1
...
y=0  0 1 0 1 0 1 0 1
     x=0 1 2 3 4 5 6 7
```

相邻格子颜色不同，对角格子颜色相同。

## 第 2 步：马走一步，颜色必翻

马的 8 个方向，看 `x+y` 的**增量** `dx+dy`：

| (dx, dy) | dx+dy | | (dx, dy) | dx+dy |
|---|---|---|---|---|
| (1, 2) | **3** | | (-1, -2) | **-3** |
| (2, 1) | **3** | | (-2, -1) | **-3** |
| (2, -1) | **1** | | (-2, 1) | **-1** |
| (1, -2) | **-1** | | (-1, 2) | **1** |

8 个增量全是**奇数**。原因很简单：马走的是「一个方向 2 格 + 垂直方向 1 格」，所以 `{|dx|,|dy|} = {1,2}`，`|dx|+|dy| = 3` 恒为奇数，符号只影响正负不影响奇偶。

`x+y` 每步都加一个奇数 ⇒ **奇偶性每步都翻转** ⇒ 颜色每步都翻转。

## 第 3 步：步数的奇偶被两端颜色锁死（必要性）

走 `k` 步就翻 `k` 次色：

```
color(target) = color(start) XOR (k % 2)
```

- `k` 是偶数 ⇒ 翻偶数次 ⇒ 回到原色 ⇒ `color(start) == color(target)`
- `k` 是奇数 ⇒ `color(start) != color(target)`

关键点在于：**任意一条**从 start 到 target 的走法，长度的奇偶都是同一个值，由两端颜色唯一决定。不存在「这条路 3 步、那条路 4 步」的可能——4 步的路径终点必然落在另一种颜色上。

所以异色 ⇒ 偶数步绝无可能 ⇒ `false`。

## 第 4 步：同色一定能做到（充分性）

这是容易被跳过、但真正需要论证的一半。同色只说明「如果能到，步数一定是偶数」，还得保证**确实能到**。

依据两条性质：

1. **8×8 棋盘的马图是连通的** —— 马的巡游（knight's tour）存在，任意两格之间都有路径。
2. 由第 3 步，这条路径的长度奇偶 = 两端颜色差 = 0，即**偶数**。

两条合起来：同色 ⇒ 存在路径 ⇒ 该路径长度必为偶数 ⇒ `true`。

顺带覆盖了 `start == target`：`k = 0`，0 是偶数，同色也自动成立，返回 `true`。这比之前 BFS 版靠「马两步可原地往返」绕回来干净多了。

## 第 5 步：公式是怎么变形出来的

要判的是「同色」：

```typescript
(start[0] + start[1]) % 2 === (target[0] + target[1]) % 2
```

记 `A = start[0]+start[1]`、`B = target[0]+target[1]`。两数同奇偶 ⟺ 差为偶 ⟺ **和**为偶（因为模 2 下 `-1 ≡ 1`，加减等价）：

```typescript
(A + B) % 2 === 0
```

展开就是你那一行。

用 `+` 而不是 `-` 只是习惯上更省心：JS 里 `(-3) % 2` 得到 `-1` 而不是 `1`。不过这里跟 `=== 0` 比较，`A - B` 写法其实也对（奇数时结果是 `1` 或 `-1`，都不等于 0），差别只在于换成 `=== 1` 那种写法时会踩坑。

## 样例验算

| 输入 | A | B | A+B | %2 | 输出 |
|---|---|---|---|---|---|
| `[1,1] → [2,2]` | 2 | 4 | 6 | 0 | `true` ✓ |
| `[4,5] → [6,6]` | 9 | 12 | 21 | 1 | `false` ✓ |

拿题目给的路径核对第 1 例：`(1,1)→(3,2)→(2,4)→(4,3)→(2,2)`，各点 `x+y` 依次是 `2, 5, 6, 7, 4`，奇偶为 `偶,奇,偶,奇,偶` —— 严格交替，4 步落回偶色。

## 一个值得记住的边界

充分性依赖「8×8 马图连通」，这一条**不是普适的**，所以题目里 `0 <= start[i], target[i] <= 7` 的约束不能少。

反例：3×3 棋盘上，中心格 `(1,1)` 的 8 个落点全部出界，它是**孤立点**。而 `(1,1)` 与角 `(0,0)` 都是偶色 —— 同色，但永远走不到。此时公式会错误地返回 `true`，必须退回 BFS。

换句话说：**颜色论证给出必要条件，连通性把它升级成充要条件**。棋盘一变小，就只剩必要条件了。
*/

function canReach(start: number[], target: number[]): boolean {
    return (start[0] + start[1] + target[0] + target[1]) % 2 === 0;
}
