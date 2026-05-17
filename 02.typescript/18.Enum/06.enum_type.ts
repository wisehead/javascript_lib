enum ShapeKind {
    Circle = "circle",
    Square = "square"
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

var c: Circle = {
    kind: ShapeKind.Circle,
    radius: 10
};

console.log("圆形: " + JSON.stringify(c));