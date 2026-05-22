"use strict";
/// <reference path = "IShape.ts" /> 
var Drawing;
(function (Drawing) {
    class Circle {
        draw() {
            console.log("Circle is drawn");
        }
    }
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" /> 
var Drawing;
(function (Drawing) {
    class Triangle {
        draw() {
            console.log("Triangle is drawn");
        }
    }
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
function drawAllShapes(shape) {
    shape.draw();
}
drawAllShapes(new Drawing.Circle());
drawAllShapes(new Drawing.Triangle());
