// class Car{
//      distance = 100
//     constructor(name, color){
//        this.name = name;
//        this.color = color;
    
//          }
// get speed(){
//     return this.distance/10
// }
// }
// const car = new Car("maybach", "Blue", "100km")
// console.log(car.speed);





// create a class
class Temperature{
// create a celcius function
  celcius(fahreint){
    return (fahreint - 32) * 5/9
  }
// create a fahreint function
  fahreint(celcius){
    return (celcius * 9 / 5) + 32
  }
};
// Instantiate Temperature
const temp = new Temperature;

