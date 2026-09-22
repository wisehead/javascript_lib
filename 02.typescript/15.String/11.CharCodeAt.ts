// ## 获取字符的 ASCII / Unicode 码的方法

// ### 1. `charCodeAt()` — 最常用
const code = "A".charCodeAt(0);  // 65
const code2 = "a".charCodeAt(0); // 97

// ### 2. `codePointAt()` — 支持完整 Unicode（推荐用于非 ASCII）
"a".codePointAt(0);       // 97
"😀".codePointAt(0);      // 128512 (charCodeAt 只能拿到一半，结果不对)

// ### 3. `String.charCodeAt` 的一般写法
const ch = "Z";
const ascii = ch.charCodeAt(0);  // 90

// ### 反向操作：码 → 字符
String.fromCharCode(65);   // "A"
String.fromCodePoint(128512); // "😀"

// ### 常用对照
// | 字符 | 码值 |
// |---|---|
// | `'0'` ~ `'9'` | 48 ~ 57 |
// | `'A'` ~ `'Z'` | 65 ~ 90 |
// | `'a'` ~ `'z'` | 97 ~ 122 |

// ### 小技巧
// 字符转数字
Number("7");          // 7
"7".charCodeAt(0) - 48;  // 7 (通过 ASCII 差值)

// 字母转序号 (a=0, b=1, ...)
"c".charCodeAt(0) - 97;  // 2
"c".charCodeAt(0) - "a".charCodeAt(0); // 2 (更通用)

// **结论**：纯 ASCII 字符用 `charCodeAt(0)` 即可；如果可能涉及中文、emoji 等，用 `codePointAt(0)` 更安全。
