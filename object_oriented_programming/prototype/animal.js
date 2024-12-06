class Animal {
  constructor(species) {
    this.species = species;
  }
  talk() {
    return `I AM Able To Talk And my species Is ${this.species}`;
  }
  eat() {
    return `I AM Able To Eat And my species Is ${this.species}`;
  }
}

class Dog extends Animal {
  constructor(species, ownerName) {
    super(species);
    this.ownerName = ownerName;
  }
  bark() {
    return `Wooof Woooof Because I Am '${this.species} and Owned By '${this.ownerName}'`;
  }
}

const dogOne = new Dog("Dog", "Nuredin Bedru");

console.log("Dog Object : ", dogOne.bark());
