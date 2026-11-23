// JavaScript 实现 class
// JS 的 `class` 本质是**语法糖**，底层还是基于原型（prototype）。下面分：原生 class 写法、ES5 手动模拟 class（理解原理）、常用特性。

// ## 一、ES6 class 标准写法（推荐）
// 定义类
class Person {
  // 构造函数：实例初始化
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 实例方法（挂在原型上，所有实例共享）
  sayHi() {
    console.log(`我是${this.name}，今年${this.age}`);
  }

  // 静态方法：属于类本身，实例不能调用
  static hello() {
    console.log("静态方法");
  }

  // getter / setter
  get info() {
    return `${this.name}-${this.age}`;
  }
  set info(val) {
    [this.name, this.age] = val.split("-");
  }
}

// 实例化
const p1 = new Person("张三", 18);
p1.sayHi();
console.log(p1.info);
Person.hello(); // 静态方法用类调用

// ## 二、继承 extends
class Student extends Person {
  constructor(name, age, score) {
    // 子类必须先调用 super，执行父类构造
    super(name, age);
    this.score = score;
  }
  study() {
    console.log(`${this.name} 在学习，分数${this.score}`);
  }
}

const s1 = new Student("李四", 16, 95);
s1.sayHi();
s1.study();

// ## 三、ES5 原生原型模拟 class（理解底层原理）
// ES6 class 只是语法糖，等价于下面这种原型写法：
// 构造函数
function PersonES5(name, age) {
  this.name = name;
  this.age = age;
}

// 原型方法
PersonES5.prototype.sayHi = function () {
  console.log(`我是${this.name}，今年${this.age}`);
};

// 静态方法
PersonES5.hello = function () {
  console.log("静态方法");
};

const p2 = new PersonES5("王五", 20);
p2.sayHi();
PersonES5.hello();

// ### ES5 模拟继承
function StudentES5(name, age, score) {
  PersonES5.call(this, name, age); // 继承实例属性
  this.score = score;
}
// 绑定原型
StudentES5.prototype = Object.create(PersonES5.prototype);
StudentES5.prototype.constructor = StudentES5;

StudentES5.prototype.study = function () {
  console.log(this.name, this.score);
};

// ## 四、关键要点
// 1. `class` 不能直接调用，必须 `new`；
// 2. 类里面定义的方法**不会被枚举**（`for...in` 遍历不到），ES5 原型方法默认可枚举；
// 3. 私有字段：`#` 开头（ES2022）
class Test {
  #secret = "私有变量";
  getSecret() {
    return this.#secret;
  }
}
// 4. 箭头函数写在 class 内部属于**实例自身属性**，不在原型上，每个实例单独一份，慎用：
class A {
  fn = () => {
    console.log(this);
  }
}

// ## 五、class 与普通构造函数对比
// | 特性 | ES6 class | ES5 构造函数 |
// |---|---|---|
// | 提升 | 不存在变量提升 | 函数提升 |
// | 严格模式 | 默认开启严格模式 | 不强制 |
// | 方法枚举 | 不可枚举 | 可枚举 |
// | 私有属性 | 支持 `#` | 无原生私有 |

// 如果你想要，我可以给你一份**手写简易class实现（用Object.create + 闭包模拟完整class）**。
