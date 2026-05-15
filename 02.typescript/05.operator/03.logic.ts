var avg:number = 20; 
var percentage:number = 90; 
 
console.log("avg 值为: "+avg+" ,percentage 值为: "+percentage);
    
var res1:boolean = ((avg>50)&&(percentage>80)); 
console.log("(avg>50)&&(percentage>80): ",res1);
 
var res2:boolean = ((avg>50)||(percentage>80)); 
console.log("(avg>50)||(percentage>80): ",res2);
 
var res3:boolean=!((avg>50)&&(percentage>80)); 
console.log("!((avg>50)&&(percentage>80)): ",res3);