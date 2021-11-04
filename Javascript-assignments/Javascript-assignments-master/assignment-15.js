// Create a class named LandVehicle which should have 1 property on it 'wheels' and 2 methods (to get and set the value of that property)

// class LandVehicle {
//     constructor (givenWheel) {
//         this.wheel = givenWheel
//     }
//     getWheels() {
//         return this.wheel
//     }
//     setWheels(givenWheel) {
//         this.wheel = givenWheel
//     }
// }

// newVehicle = new LandVehicle("toyota")
// console.log(newVehicle.getWheels());

// newVehicle.setWheels("corolla");
// console.log(newVehicle.getWheels());
// newVehicle.setWheels("honda");
// console.log(newVehicle.getWheels());


// Create a class named Car which should have 3 properties on it (wheels, doors, engineQuality) inherit this class from the LandVehicle class and implement the get and set methods for doors and engineQuality. Also create a 'printSummary' function to print the sumamry about the car


class Car {
    constructor(wheels, doors, engineQuality) {
        this.wheels = wheels;
        this.doors = doors;
        this.engineQuality = engineQuality;
    }
}

class LandVehicle extends Car {
    setDoors(doors) {
        this.doors = doors;
    }
    setEngineQuality(engineQuality) {
        this.engineQuality = engineQuality;
    }
    getDoors() {
        return this.doors;
    }
    getEngineQuality() {
        return this.engineQuality;
    }
     printSummary() {
        console.log(this.wheels, this.doors, this.engineQuality);
    }

}
newBrand = new LandVehicle(4, "two doors", 1600)

newBrand.setDoors("4 doors")

// console.log(newBrand.doors);
newBrand.printSummary()

