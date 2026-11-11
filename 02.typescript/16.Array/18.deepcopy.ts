// TypeScript 深拷贝全套示例
//
// 先明确边界：
// - 原始类型：number / string / boolean / null / undefined / symbol / bigint，赋值本身就是独立值
// - 一维 number[]：元素是原始值，[...arr] 这类属于浅拷贝API，但效果等价深拷贝
// - 嵌套数组 number[][]、对象、对象数组：必须递归/逐层处理，才是真正深拷贝
//
// 区分：
// - 引用赋值：let b = a → 不拷贝，共用内存
// - 浅拷贝：只复制第一层，内部引用继续共享
// - 深拷贝：所有层级全部新建，修改副本完全不影响原数据

// ============================================================
// 一、一维原始数组（number[] / string[]）
// ============================================================
{
  const src: number[] = [1, 2, 3, 4];

  // 方式1：展开运算符（推荐）
  const copy1 = [...src];

  // 方式2：slice()
  const copy2 = src.slice();

  // 方式3：Array.from
  const copy3 = Array.from(src);

  // 验证：修改副本，原数组不变
  copy1[0] = 999;
  console.log(src); // [1,2,3,4]

  // 对一维原始数组，上面3种都等价深拷贝；但不能用于嵌套数组
  void copy2;
  void copy3;
}

// ============================================================
// 二、二维数字数组 number[][]（LeetCode高频）
// ============================================================
{
  const src: number[][] = [[1, 2], [3, 4]];

  // 方案1：map + 展开（最推荐，无副作用，性能好）
  const copyA = src.map(row => [...row]);

  // 方案2：map + slice
  const copyB = src.map(row => row.slice());

  // 方案3：map + Array.from
  const copyC = src.map(row => Array.from(row));

  // 方案4：JSON序列化（有坑！）
  // 缺陷：不能存 NaN、Infinity、undefined、Date、正则、函数
  const copyD = JSON.parse(JSON.stringify(src)) as number[][];

  // 测试：
  copyA[0][0] = 99;
  // src[0][0] 保持不变
  void copyB;
  void copyC;
  void copyD;
}

// ============================================================
// 三、任意多维数组（通用递归版）
// ============================================================
function deepCloneArray<T>(arr: T[]): T[] {
  return arr.map(item => {
    if (Array.isArray(item)) {
      return deepCloneArray(item) as T;
    }
    return item;
  });
}

{
  const src3: number[][][] = [[[1, 2]], [[3]]];
  const copy3 = deepCloneArray(src3);
  void copy3;
}

// ============================================================
// 四、普通对象深拷贝
// ============================================================
interface User {
  id: number;
  info: { age: number };
}

function deepClone<T>(val: T): T {
  if (val === null || typeof val !== 'object') return val;
  if (Array.isArray(val)) return val.map(v => deepClone(v)) as T;
  const obj = {} as T;
  for (const key in val) {
    if (Object.prototype.hasOwnProperty.call(val, key)) {
      obj[key] = deepClone(val[key]);
    }
  }
  return obj;
}

{
  const src: User = { id: 1, info: { age: 20 } };

  // 浅拷贝：const copy = {...src}，info 还是同一个引用
  // 递归深拷贝
  const copyUser = deepClone(src);
  copyUser.info.age = 99;
  console.log(src.info.age); // 20 不变
}

// ============================================================
// 五、对象数组深拷贝
// ============================================================
{
  type Item = { val: number; children: number[] };
  const list: Item[] = [
    { val: 1, children: [10, 20] }
  ];
  const copyList = deepClone(list);
  copyList[0].children[0] = 999;
  void copyList;
}

// ============================================================
// 六、结构化克隆 structuredClone（浏览器/Node.js 17+，原生API）
// 现代标准深拷贝API，优先推荐（支持 Date、Map、Set，不支持函数）
// 优点：内置、稳定；缺点：低版本环境不支持，不能拷贝函数。
// ============================================================
{
  const src = [[1, 2], { a: new Date() }];
  const copy = structuredClone(src);
  void copy;
}

// ============================================================
// 七、第三方库方案（工程项目）
// lodash: import _ from 'lodash'; const copy = _.cloneDeep(src);
// ============================================================

// 汇总对比表
// | 写法 | 适用场景 | 是否真·深拷贝 | 缺点 |
// | --- | --- | --- | --- |
// | let p = arr | 赋值引用 | 不是拷贝 | 共用内存，一改全改 |
// | [...arr] / slice / Array.from | 一维原始数组 | 等价深拷贝 | 嵌套数组只能浅拷贝 |
// | arr.map(r=>[...r]) | number[][] 二维数组 | 是 | 三维及以上还需要递归 |
// | JSON.parse(JSON.stringify) | 简单纯数字/对象 | 是 | 丢失NaN/Infinity/Date/函数 |
// | 手写递归deepClone | 任意层级数组+对象 | 是 | 需要自己维护 |
// | structuredClone | 现代环境，含Date/Map/Set | 是 | 不支持函数，老环境无 |
// | _.cloneDeep | 正式项目 | 是 | 需要引入lodash包 |

// ============================================================
// LeetCode 刷题最简两套常备模板
// ============================================================

// 1. 二维数字数组：
// const copy = path.map(x => [...x]);

// 2. 通用递归深拷贝（遇到复杂结构直接用）
function deepCloneTemplate<T>(v: T): T {
  if (v === null || typeof v !== 'object') return v;
  if (Array.isArray(v)) return v.map(i => deepCloneTemplate(i)) as T;
  const o = {} as T;
  for (const k in v) o[k] = deepCloneTemplate(v[k]);
  return o;
}

void deepCloneTemplate;
void deepCloneArray;
