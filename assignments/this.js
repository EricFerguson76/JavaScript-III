/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window - functions that are within the global scope.
 * 2. Implicit Binding - you look to the left of the dot when a function is invoked.
 * 3. Explicit Binding - we use call, apply or bind to point the JavaScript engine to a certain value.
 * 4. Bind - creates a new function that is permanently bound to a "this" element.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
//'use strict';

//function car() {
//console.log(this.beep);
//}
//car();
//const beep = '🚗';

// Principle 2

// code example for Implicit Binding

let myCar = {
  name: 'Dodge',
  type: 'Challenger',
  car: function() {
    console.log(this.name);
  }
};

//myCar.car(this.name);
// Principle 3

// code example for New Binding

function AChristmasStory(saying) {
  this.thing = saying;
}

let myStory = new AChristmasStory('Youll shoot your eye out kid!');

console.log(myStory.thing);

// Principle 4

// code example for Explicit Binding

function truck() {
  console.log(this.type);
}

let myTruck = {
  name: 'Dodge',
  type: 1500
};

truck.call(myTruck);
