// 访问器装饰器工厂
function configurable(value: boolean) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        // 修改属性的 configurable 特性
        // false 表示该访问器不可被重新配置或删除
        descriptor.configurable = value;
    };
}

class Point {
    private _x: number = 0;
    private _y: number = 0;

    // 使用装饰器锁定 getter
    @configurable(false)
    get x() {
        return this._x;
    }

    @configurable(false)
    get y() {
        return this._y;
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }
}

var point = new Point();
point.x = 10;
point.y = 20;
console.log("坐标: (" + point.x + ", " + point.y + ")");