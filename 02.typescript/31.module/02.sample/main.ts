// 导入默认导出：可以取任意名字
import add from "./math";

// 导入命名导出：需要使用花括号
import { multiply } from "./math";

console.log("加法: " + add(2, 3));
console.log("乘法: " + multiply(4, 5));