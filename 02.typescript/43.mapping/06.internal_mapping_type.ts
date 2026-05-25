// Partial - 将所有属性变为可选
type P1 = Partial<{ a: string; b: number }>;
// 结果：{ a?: string; b?: number }

// Required - 将所有可选属性变为必填
type R43 = Required<{ a?: string; b?: number }>;
// 结果：{ a: string; b: number }

// Readonly - 将所有属性变为只读
type RO43 = Readonly<{ a: string; b: number }>;
// 结果：{ readonly a: string; readonly b: number }

// Pick - 选择指定的属性
type PK = Pick<{ a: string; b: number; c: boolean }, "a" | "b">;
// 结果：{ a: string; b: number }

// Omit - 排除指定的属性
type OM = Omit<{ a: string; b: number; c: boolean }, "c">;
// 结果：{ a: string; b: number }

// 测试 Partial
console.log("Partial: " + JSON.stringify({} as P1));

// 测试 Pick
console.log("Pick: " + JSON.stringify({ a: "x" } as PK));

// 测试 Omit
console.log("Omit: " + JSON.stringify({ a: "x", b: 5 } as OM));