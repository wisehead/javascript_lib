// 定义元组类型
type Tuple51 = [string, number, boolean];

// 获取元组元素类型
type First = Tuple51[0];   // string
type Second = Tuple51[1];  // number
type Third = Tuple51[2];   // boolean

// 使用 number 获取所有元素类型
type AllElements = Tuple51[number];  // string | number | boolean

// 获取数组元素类型
type StringArray = string[];
type ArrayElement51 = StringArray[number];  // string

// 实际应用：函数重载
function getElement<T extends any[]>(
    arr: T,
    index: number
): T[number] | undefined {
    return index < arr.length ? arr[index] : undefined;
}

const tuple: Tuple51 = ["hello", 123, true];
const arr: string[] = ["a", "b", "c"];

console.log("元组元素[0]: " + getElement(tuple, 0));
console.log("数组元素[1]: " + getElement(arr, 1));