const util = require('util');
class CustomObject {
  constructor(value) {
    this.value = value;
  }
  
  [util.inspect.custom](depth, options) {
    return `CustomObject: ${this.value}`;
  }
}

const obj = new CustomObject('test');
console.log(util.inspect(obj)); // CustomObject: test