/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
  constructor(){
  }
}
var poodle = new Dog()
var lab = new Dog()
 console.log(poodle)
 console.log(lab)

// Prompt 2: Snack
class Snack {
  constructor(){

  }
}
var doritos= new Snack()
var fritoLays= new Snack()
console.log(doritos)
console.log(fritoLays)

// Prompt 3: Shirt
class Shirt{
  constructor(){

  }
}
var tShirt= new Shirt()
var buttonUp = new Shirt()
console.log(tShirt)
console.log(buttonUp)

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
class DogStat{
  constructor(){
    this.age = 12;
    this.size = 'medium';
    this.color = 'Black';
  }
}
var lab =  new DogStat()
console.log(lab)

// Prompt 2: Snack
class Snackstat{
  constructor(){
    this.taste = 'cheesy'
    this.price = 1.99
    this.location = 'seven eleven'
  }
}
var doritos = new Snackstat()
console.log(doritos)
// Prompt 3: Shirt
class ShirtStat{
  constructor(){
    this.size = 'large'
    this.color = 'white'
    this.weather = 'warm'
  }
}
var tShirt= new ShirtStat()
console.log(tShirt)
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class DogProps{
  constructor(dogAge, dogSize, dogColor){
    this.age = dogAge
    this.size = dogSize
    this.color = dogColor
  }
}
var lab =  new DogProps(12,'medium','black')
var clifford = new DogProps(6,'huge', 'red')
console.log(lab)
console.log(clifford)
// Prompt 2: Snack
class SnackProps{
  constructor(snackTaste, snackPrice, snackLocation){
    this.taste = snackTaste
    this.price = snackPrice
    this.location = snackLocation
  }
}
var fritoLays = new SnackProps('salty', 2.99,'walmart')
var doritos = new SnackProps('cheesy', 3.99, 'target')
console.log(fritoLays)
console.log(doritos)

// Prompt 3: Shirt
class ShirtProps{
  constructor(shirtSize, shirtColor, shirtSituation){
    this.size = shirtSize
    this.color = shirtColor
    this.situation = shirtSituation
  }
}

var tankTop = new ShirtProps('XXL', 'green', 'warm weather')
var turtleneck = new ShirtProps('L','black', 'tactical')
console.log(tankTop)
console.log(turtleneck)
