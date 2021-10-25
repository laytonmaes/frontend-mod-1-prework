/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22 + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var dobbieMotto = "Harry Potter must not return to Hogwarts!"
console.log(dobbieMotto)

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "Bugsy"
var isHungry = true
var numberOfPets = 0
// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.

// first name is pretty obvious thats a string, most people dont have names as numbers, arrays,
// or boolean functions. isHungry seems like a yes or no, so probably true or false boolean function.
// number of pets preferably you would want a number you might be able to do things with.

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
console.log(firstName + " " + isHungry + " " +numberOfPets)
firstName = "Dylan"
isHungry = false
numberOfPets = 2

console.log( `${firstName} ${isHungry} ${numberOfPets}`)
// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks)
//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?

// it did. i did it both with a straight log which i wasnt sure would work and with an established variable,
// so kinda sorta?
