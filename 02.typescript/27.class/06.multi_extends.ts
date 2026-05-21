// 根类
class Root {
    str: string | undefined;
}

// 子类：继承 Root
class Child extends Root {
}

// 叶子类：继承 Child（多重继承）
class Leaf extends Child {
}

var leaf = new Leaf();
leaf.str = "hello";
console.log("str 值: " + leaf.str);