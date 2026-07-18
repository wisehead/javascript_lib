function applyOperation(a, b, operation) {
    return operation(a, b);
}

const sum = applyOperation(5, 3, (x, y) => x + y);
const product = applyOperation(5, 3, (x, y) => x * y);

console.log(sum); // 8
console.log(product); // 15