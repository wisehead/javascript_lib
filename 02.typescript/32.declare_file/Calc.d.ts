// 文件路径：Calc.d.ts
// 这是声明文件，只包含类型信息，不包含任何可执行代码

// 声明 Runoob 模块，与 JS 库中的 Runoob 命名空间对应
declare module Runoob {
   // 声明 Calc 类，告诉 TypeScript 这个类可以被 new 实例化
   export class Calc {
      // 声明 doSum 方法：接收一个 number 参数，返回一个 number
      // 注意：这里只声明了方法的签名，没有方法体（大括号）
      doSum(limit: number): number;
   }
}