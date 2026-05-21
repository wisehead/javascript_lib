const t: [number, string] = [1, 'a'];

t.push('b');
console.log(t);
// 🔥 报错：
// Argument of type 'string' is not assignable to parameter of type 'undefined'