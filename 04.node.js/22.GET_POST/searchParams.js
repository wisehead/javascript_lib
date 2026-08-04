const myUrl = new URL("http://example.com/path?foo=bar&hello=world");

console.log(myUrl.pathname);            // 输出: /path
console.log(myUrl.searchParams.get("foo")); // 输出: bar

myUrl.searchParams.append("newKey", "newValue");
console.log(myUrl.href);               // 输出: http://example.com/path?foo=bar&hello=world&newKey=newValue