// 先说重点
//
// number[] 是基础类型数组（元素都是原始值 number），它不存在“深层嵌套对象”，普通拷贝就是深拷贝；
// 只有数组里面包含对象/子数组时才需要真正的深拷贝。
//
// 区分：
// - number[]：元素是数字（原始类型）
// - number[][]：里面是子数组，属于引用类型，简单拷贝会浅拷贝

// ============================================================
// 1. number[]（一维数字数组）几种拷贝方式
// ============================================================
{
  const a: number[] = [1, 2, 3, 4];

  // 全部都是深拷贝，修改新数组不会影响原数组

  // 方式1：展开运算符（最常用）
  const b = [...a];

  // 方式2：slice()
  const c = a.slice();

  // 方式3：Array.from
  const d = Array.from(a);

  // 测试：
  b[0] = 99;
  console.log(a); // [1,2,3,4] 不变
  void c;
  void d;
}

// ============================================================
// 2. 如果是 number[][] 二维数组（上一个场景）
// 上面三种方法只能浅拷贝外层，子数组还是共享引用！
// ============================================================
{
  const src: number[][] = [[1, 2], [3, 4]];
  const shallow = [...src];
  shallow[0][0] = 99;
  // src[0][0] 也变成99（坑！）

  // 二维数字数组深拷贝写法：

  // 写法A：map（推荐）
  const deepCopy: number[][] = src.map(row => [...row]);

  // 写法B：JSON序列化（简单场景，不能有NaN/Infinity）
  const deepCopy2 = JSON.parse(JSON.stringify(src)) as number[][];

  void deepCopy;
  void deepCopy2;
}

// ============================================================
// 3. 通用深拷贝函数（任意层级数组/对象）
// ============================================================
function deepClone<T>(val: T): T {
  if (typeof val !== 'object' || val === null) return val;
  if (Array.isArray(val)) return val.map(item => deepClone(item)) as T;
  return { ...val };
}

void deepClone;

// 一句话总结
// - 一维 number[]：[...arr] / slice() / Array.from 随便用，都是深拷贝
// - 二维 number[][]：必须循环拷贝每一行，.map(row=>[...row])
// - JSON方案有局限：不支持 NaN、Infinity、undefined
export {}