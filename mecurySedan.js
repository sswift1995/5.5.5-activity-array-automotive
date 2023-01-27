import { Vehicle} from './vehicle.js';

class Car extends Vehicle {
constructor(make, model, avgMilege, year, color,){
    super(make, model, avgMilege, year, color);
    this.maxPassengers = 5;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
}
//method loadPassenger(no parementers)
loadPassenger (num){
    //pulling the if/else statement  
if (this.passenger < this.maxPassengers){
    this.passenger = num;
    return this.passenger;
} else {
    console.log("this.model" + " this.make" + "No room available for all passengers.")
} 
}
//method start (no parameters)
start(){
    if (this.fuel > 0){
        return this.starter = true
    } else { 
        console.log("empty Fuel");
        return this.starter = false;
    }
}
//method checkServices(no parameters)
 checkServices(){
    if(this.avgMilege >30000){
        this.scheduleService = true
        return this.scheduleService;
    }
 }
}
//creating Car class 
let myCar = new Car('tesla','model Y','2023', 'midnight Blue', '30000')
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkServices()

console.log(myCar)