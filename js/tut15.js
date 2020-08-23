console.log("Welcome to tut25");
let car = {
  name: "Maruti 800",
  topSpeed: 89,
  run: function () {
    console.log("The car is running");
  },
};
function GeneralCar(givenName, givenSpeed) {
  this.name = givenName;
  this.speed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
  this.analyze = function () {
    console.log(
      `this car is slower by ${350 - this.speed}km/h than lambo huraconn!!!!`
    );
  };
}
car1 = new GeneralCar("Rollsroyace", 250);
car2 = new GeneralCar("Maruti 800", 85);
console.log(car1);
