var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
 
function disp(arr_sites:string[]) {
        for(var i = 0;i<arr_sites.length;i++) { 
                console.log(arr_sites[i]) 
        }  
}  
disp(sites);


function disp2():string[] { 
        return new Array("Google", "Runoob", "Taobao", "Facebook");
} 
 
var sites:string[] = disp2() 
for(var i = 0; i < sites.length; i++) { 
        console.log(sites[i]) 
}
