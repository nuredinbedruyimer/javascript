function Animal(species) {
  this.species = species;
}
Animal.prototype.talk = function () {
  return `I AM Able To Talk And my species Is ${this.species}`;
};
Animal.prototype.eat = function () {
  return `I AM Able To Eat And my species Is ${this.species}`;
};

function Dog(ownerName) {
  Animal.call(this, "Dog");
  this.ownerName = ownerName;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  return `Wooof Woooof Because I Am '${this.species} and Owned By '${this.ownerName}'`;
};

const dogOne = new Dog("Nuredin Bedru");

console.log("Dog Object : ", dogOne.bark());
