var x = new Date();
x.setFullYear(2100, 0, 14);
var today = new Date();

if (x > today) {
    console.log("今天是2100年1月14日之前");
} else {
    console.log("今天是2100年1月14日之后");
}