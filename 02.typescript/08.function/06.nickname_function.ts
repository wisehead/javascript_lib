var msg2 = function() { 
    return "hello world";  
}; 
console.log(msg2());
    

var multiply = function(a: number, b: number) { 
    return a * b;  
}; 
console.log(multiply(12, 2));


// 匿名函数自调用
// 匿名函数自调用在函数后使用 () 即可：
(function () { 
    var x = "Hello!!";   
    console.log(x);     
 })();


