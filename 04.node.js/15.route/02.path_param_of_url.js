const myUrl = new URL("http://localhost:8888/start?foo=bar&hello=world");

// 提取路径名
console.log(myUrl.pathname); // 输出: /start

// 提取查询参数
console.log(myUrl.searchParams.get("foo"));   // 输出: bar
console.log(myUrl.searchParams.get("hello")); // 输出: world