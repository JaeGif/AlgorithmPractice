//  drivers
//  vehicles of different types
//  parking spots
//  tickets
//  lot itself may have floors with x number of spots available in each floor
//  spaces detector
//
//
class Driver {
  constructor(name) {
    this.name = name;
  }
}

class Vehicle {
  constructor(mileage, energyCapacity) {
    this.mileage = mileage;
    this.energyCapacity = energyCapacity;
  }
  // vehicles update their gasCapacity based on fuel, etc not necessarily relevant to the parking lot but
  milesTraveledSinceRefuel = 0;
  #sound = 'default vehicle honk';
  remainingFuel =
    this.energyCapacity - this.milesTraveledSinceRefuel / this.mileage; // m/gallon the gallons it cost

  setMilesTraveled(miles) {
    // every time it travels this will tick over a mile and update milesTraveled
    this.milesTraveledSinceRefuel += miles;
  }
  makeSound() {
    // make some kind of sound based on vehicle perchance
    return this.#sound;
  }
}

class Car extends Vehicle {
  constructor(make, model, licensePlate, mileage, energyCapacity) {
    super(mileage, energyCapacity);

    this.make = make;
    this.model = model;
    this.licensePlate = licensePlate;
  }
  #sound = 'Car honk';
  size = 'average';
  makeSound() {
    return this.#sound;
  }
}
class Motorcycle extends Vehicle {
  constructor(make, model, licensePlate, mileage, energyCapacity) {
    super(mileage, energyCapacity);

    this.make = make;
    this.model = model;
    this.licensePlate = licensePlate;
  }
  #sound = 'Motorcycle beep';
  size = 'small';

  makeSound() {
    return this.#sound;
  }
}
class Truck extends Vehicle {
  constructor(make, model, licensePlate, mileage, energyCapacity) {
    super(mileage, energyCapacity);

    this.make = make;
    this.model = model;
    this.licensePlate = licensePlate;
  }
  #sound = 'Truck brrr';
  size = 'large';

  makeSound() {
    return this.#sound;
  }
}
class ParkingLot {
  static instance;
  constructor() {
    // constructor is called when obj is created
    if (ParkingLot.instance) return ParkingLot.instance;
    ParkingLot.instance = this;

    this.levels = []; // array of levels from level class
  }

  static getInstance() {
    // if there is an instance return instance, else create a new one this is identical in attempting to
    // instantiate the ParkingLot again
    if (this.instance) return this.instance;
    else this.instance = new ParkingLot();
  }

  addLevel(level) {
    this.levels.push(level);
  }
  parkVehicle(vehicle) {
    // parks a vehicle in available spot one by one
    // before attempting a park, perhaps we would lock the poarkingspots
    for (let level of this.levels) {
      if (level.parkVehicle(vehicle)) {
        console.log('successfully parked', vehicle);
      }
    }
    console.log('No space for vehicle');
  }
}

class Level {
  constructor(floor, numSpots) {
    this.floor = floor;
    this.numSpots = numSpots;

    this.#populateParkingSpots();
  }
  parkingSpots = []; // parking spots array using parking spots class
  // maybe tells percentage of different available spots for vehicle types, small for bikes and fiats, avg for regular cars, large for trucks
  #smallParking = 0.2;
  #avgParking = 0.7;
  #largeParking = 0.1;

  smallCount = this.#smallParking * this.numSpots;
  avgCount = this.#avgParking * this.numSpots;
  largeCount = this.#largeParking * this.numSpots;

  #populateParkingSpots() {
    // small avg and large could also be ints with real world values
    for (let i = 0; i < this.smallCount; i++) {
      this.parkingSpots.push(new ParkingSpot(i, 'small')); // new ParkingSpot(i,small);
    }
    for (let i = 0; i < this.avgCount; i++) {
      this.parkingSpots.push(new ParkingSpot(i, 'average')); // new ParkingSpot(i,average);
    }
    for (let i = 0; i < this.largeCount; i++) {
      this.parkingSpots.push(new ParkingSpot(i, 'large')); // new ParkingSpot(i,large);
    }
  }
  // park vehicle on this level?
  parkVehicle(vehicle) {
    // we should lock parking spots potentially using a mutex
    for (let spot in this.parkingSpots) {
      if (spot.isAvailable() && spot.size === vehicle.size) {
        spot.parkVehicle();
      }
    }
  }
  unParkVehicle() {
    // opposite of park vehicle
  }
}
class ParkingSpot {
  constructor(spotNum, size) {
    this.spotNum = spotNum;
    this.size = size;
  }
  #parkedVehicle = null; // will store the actual vehicle parked

  isAvailable() {
    return this.#parkedVehicle === null;
  }
  parkVehicle(vehicle) {
    if (vehicle.size === this.size && this.isAvailable()) {
      // small is arbitrary right now, but may be a real measurement
      this.#parkedVehicle = vehicle;
    } else {
      // could be more specific with this error, but we ball
      return 'Wrong size vehicle, or space occupied';
    }
  }
  leaveSpot() {
    this.#parkedVehicle = null;
  }
  getParkedVehicle() {
    return this.#parkedVehicle;
  }
}

// say for some reason parking a vehicle was asyncronous, or in a different language that supports simple multithreading like C# or Java
// mayhaps one would then want to use a mutex to lock the parking spots while it is being checked so no vehicle can double park, race to a spot

class AsyncMutex {
  constructor() {
    this.locked = false; // starts unlocked
    this.queue = []; // also takes a queue

    // debateable, do we want just one "god mutex" with static properties? probably not,
    // i can imagine a situation where we need mutexes for
    // completely different tasks
  }
  async lock() {
    // locking the mutex will involve a promise
    return new Promise((resolve) => {
      if (!this.locked) {
        this.locked = true;
        resolve();
      } else {
        this.queue.push(resolve);
      }
    });
  }

  unlock() {
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      next();
    } else {
      this.locked = false;
    }
  }
}

async function criticalSection(id) {
  // await mutex.lock();
  console.log(`Task ${id} is running`);
  if (id !== 7) {
    await new Promise((res) => setTimeout(res, 10000)); // Simulate async work
  } else await new Promise((res) => setTimeout(res, 5));
  console.log(`Task ${id} is done`);
  // mutex.unlock();
}
const car1 = new Car('toyota', 'camry', 'AFDB43', 20, 500);
const car2 = new Car('toyota', 'camry', 'AFDB43', 20, 500);
console.log(car1 === car1);
