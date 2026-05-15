var foo = (x:number)=>10 + x 
console.log(foo(100))      //输出结果为 110


var foo2  = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
} 
foo(100)

var func = (x: number | string)=> { 
    if(typeof x=="number") { 
        console.log(x+" 是一个数字") 
    } else if(typeof x=="string") { 
        console.log(x+" 是一个字符串") 
    }  
} 
func(12) 
func("Tom")


var display = (x: number | string) => { 
    console.log("输出为 "+x) 
} 
display(12)


var disp2 =()=> { 
    console.log("Function invoked"); 
} 
disp2();