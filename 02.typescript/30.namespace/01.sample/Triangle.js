"use strict";
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
