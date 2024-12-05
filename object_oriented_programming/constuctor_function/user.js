class Person {
  constructor(name, gender, yearOfBirth) {
    this.name = name;
    this.gender = gender;
    this.yearOfBirth = yearOfBirth;
    this.getAge = function () {
      const age = new Date().getFullYear() - this.yearOfBirth;
      console.log("Age: ", age);
    };
  }
}

const userOne = new Person("Nuredin Bedru", "Male", 2001);
userOne.getAge();
console.log(userOne);
