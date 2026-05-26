// 带数字的模板类型
// ${number} 匹配任意数字
type Row = `row${number}`;
type Row10 = Row;  // row0, row1, row2... 直到 row9...

// 组合多个类型
type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";
// 这会生成 6 种组合：btn-primary-sm, btn-primary-md, btn-primary-lg...
type ClassName = `btn-${Variant}-${Size}`;

// 只能赋值生成的 6 种组合之一
var className: ClassName = "btn-primary-md";
console.log("类名: " + className);