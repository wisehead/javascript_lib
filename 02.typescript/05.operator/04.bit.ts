var a:number = 2;   // 二进制 10 
var b:number = 3;   // 二进制 11
    
var result; 
        
result = (a & b);     
console.log("(a & b) => ",result)
            
result = (a | b);          
console.log("(a | b) => ",result)  
        
result = (a ^ b);  
console.log("(a ^ b) => ",result);
    
result = (~b); 
console.log("(~b) => ",result);
 
result = (a << b); 
console.log("(a << b) => ",result); 
 
result = (a >> b); 
console.log("(a >> b) => ",result);
 
result = (a >>> 1); 
console.log("(a >>> 1) => ",result);