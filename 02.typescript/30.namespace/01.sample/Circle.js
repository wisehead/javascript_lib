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
