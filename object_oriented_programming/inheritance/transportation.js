class Vehicle {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  move() {
    console.log(
      `Vehicle '${this.name}' Move With Speed Of '${this.speed}' Km/hr !!`
    );
  }
  stop() {
    console.log(`Vehicle '${this.name}' Stopped !!`);
  }
}

class Car extends Vehicle {
  constructor(name, speed, fuelType) {
    super(name, speed);
    this.fuelType = fuelType;
  }

  reFuel() {
    console.log(`Car '${this.name}' Refueld With '${this.fuelType}'`);
  }
}

class ElectricCar extends Car {
  constructor(name, speed, battryCapacity) {
    super(name, speed, "Electric");
    this.battryCapacity = battryCapacity;
  }

  reFuel() {
    console.log(
      `'${this.name}' Charging With Capacity '${this.battryCapacity}' kWH`
    );
  }
  move() {
    console.log(
      `'${this.name}' Move Silently At '${this.speed}' Because It is Electric Car After All !!`
    );
  }
}

const audi = new Car("Audi", 70, "BloEthanol");
console.log("Audi : ", audi);
const BMW = new ElectricCar("BWW", 100, 200);

BMW.move();
BMW.stop();
BMW.reFuel();
BMW.move();
