// TypeScript 数字字符串转整数
// TS 本身没有 int 类型，JS/TS 只有 number（64 位浮点数，可表达整数）
// 1. parseInt() 解析整数
const s1 = "123";
const num1 = parseInt(s1, 10); // 第二个参数必须传进制：10 十进制
// num1: number → 123

parseInt("123abc",10); // 123 👉 会截断后面非数字
parseInt("abc123",10); // NaN
parseInt("-456",10);  // -456
// ⚠️ 注意：一定要传基数 10，省略会有八进制 / 十六进制解析坑。

// 2. Number() 转换
Number("123");    // 123
Number("-789");   // -789
Number("123abc"); // NaN，整体不是合法数字直接NaN
Number("");       // 0

// 3. 一元加号 +（简写）
const n = +"456"; // 456 number

// 4. 转成严格整数（丢弃小数部分）
// 如果字符串带小数：
parseInt("123.99",10); // 123

// 想要严格确保整数，先Number再取整
const str = "123.99";
const i = Math.trunc(Number(str)); // 123 截断小数，正负都友好

// 类型守卫：判断是否转换成功
function safeParseInt(s:string): number | null {
  const n = parseInt(s,10);
  return isNaN(n) ? null : n;
}

safeParseInt("123"); //123
safeParseInt("abc"); //null
