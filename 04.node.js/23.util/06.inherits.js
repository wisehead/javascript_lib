const util = require('util');
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a noise.');
};

function Dog(name) {
  Animal.call(this, name);
}

util.inherits(Dog, Animal);

Dog.prototype.speak = function() {
  console.log(this.name + ' barks.');
};

const d = new Dog('Rex');
d.speak(); // Rex barks.