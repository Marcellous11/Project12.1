class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return "beep";
  }
  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numOfWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numOfWheels = 2;
  }
  evEngine() {
    return "VrOOM!!";
  }
}

class Garage {
  constructor(spaces) {
    this.vehicles = [];
    this.capacity = spaces;
  }
  add(newVehicle) {
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we are all full!";
    }
    if (!(newVehicle instanceof Vehicle)) {
      return "Sorry, only vehicles allowed.";
    }

    this.vehicles.push(newVehicle);
    return "Vehicle has been added";
  }
}

// property = ex. "this.numberOfWheels"
