// 命名导入：从模块中导入指定的内容
import { name, age, greet } from "./user";

// 命名导入：导入类
import { User } from "./user";

// 全部导入：将模块所有导出放入一个对象
import * as UserModule from "./user";

// 重命名导入：避免命名冲突
import { greet as sayHello } from "./user";

// 使用导入的内容
console.log(greet("World"));
console.log(sayHello("TypeScript"));