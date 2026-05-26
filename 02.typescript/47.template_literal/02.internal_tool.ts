// Uppercase：将字符串转为大写
type UpperHello = Uppercase<"hello">;  // "HELLO"

// Lowercase：将字符串转为小写
type LowerHELLO = Lowercase<"HELLO">;  // "hello"

// Capitalize：将字符串首字母大写
type CapitalizedHello = Capitalize<"hello">;  // "Hello"

// Uncapitalize：将字符串首字母小写
type UncapitalizedHello = Uncapitalize<"Hello">;  // "hello"

const upperHello: UpperHello = "HELLO";
const lowerHELLO: LowerHELLO = "hello";
const capitalizedHello: CapitalizedHello = "Hello";
const uncapitalizedHello: UncapitalizedHello = "hello";

console.log("Uppercase: " + upperHello);
console.log("Lowercase: " + lowerHELLO);
console.log("Capitalize: " + capitalizedHello);
console.log("Uncapitalize: " + uncapitalizedHello);