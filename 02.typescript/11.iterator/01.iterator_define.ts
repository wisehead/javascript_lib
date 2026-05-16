// 创建自定义可迭代对象：范围
var range = {
    from: 1,
    to: 5,
    // 实现 Symbol.iterator 方法
    [Symbol.iterator]: function() {
        return {
            current: this.from,
            last: this.to,
            // next 方法返回迭代结果
            next: function() {
                if (this.current <= this.last) {
                    // 未完成，返回当前值并递增
                    return { done: false, value: this.current++ };
                }
                // 已完成
                return { done: true, value: undefined };
            }
        };
    }
};

// 使用 for...of 遍历
for (var num3 of range) {
    console.log("范围: " + num3);
}