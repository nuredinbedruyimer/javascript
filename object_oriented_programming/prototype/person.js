function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I Am ${this.name} and I Am ${this.age}`;
};
const nuredin = new Person("Nuredin Bedru", 25);
const abeni = new Person("Abenezer Adugna", 20);

console.log(nuredin.greet());
console.log(abeni.greet());
