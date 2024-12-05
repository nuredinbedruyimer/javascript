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

  charge() {
    console.log(
      `'${this.name}' Charging With Capacity '${this.battryCapacity}' kWH`
    );
  }
}

const audi = new Car("Audi", 70, "BloEthanol");
const BMW = new ElectricCar("BWW", 100, 200);

BMW.move();
BMW.stop();
BMW.charge();
BMW.reFuel();
BMW.move();
