/// <reference path = "IShape.ts" /> 
namespace Drawing { 
    export class Circle implements IShape { 
        public draw(): void { 
            console.log("Circle is drawn"); 
        }  
    }
}