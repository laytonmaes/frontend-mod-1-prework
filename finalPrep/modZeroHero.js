// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName= 'John Battman'
var specialAbility = 'have a car with my face on it thats too long to turn.'

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "hello I'm "+ heroName
var catchphrase = `Put a light in a cloud. I'm john batman and I ${specialAbility}`
// Declare two variables - power AND energy - set to integers
var power = 5
var energy = 1
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power*500
var fullEnergy= energy+150
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true
var identityConcealed = false

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Dr Man Battman', 'Mr. Ice Guy', 'Many More']
//Many More is a villain too.
var sidekicks = ['Robert', 'Eight Minute Miles', 'Fishy Chip']
// Print the first sidekick to your console
console.log(sidekicks[0])
// Print the last archEnemy to the console
console.log(archEnemies[2])
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.unshift('Questions Mark')
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies)
// Remove the first sidekick from the sidekicks array
sidekicks.shift()
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sidekicks)
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay,badExcuse) {
  if (dangerLevel<= 10){
    console.log(badExcuse)
  } else if(dangerLevel> 10 && dangerLevel<= 50){
    console.log(saveTheDay)
  } else {
    console.log('Meh. Hard pass.')
  }
}
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster ={
  name: 'Salami Grungy',
  smell:'stinky',
  weight: 200,
  citiesDestroyed:['Gotham', 'Metropolis'],
  luckyNumbers:[7,5],
  address:{
    number:9999,
    street: 'Solomon Drive',
    state: 'Louisiana',
    zip:100000
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class Superhero {
  constructor(name, superPower, age){
    this.name = name
    this.superPower = superPower
    this.age = age
    this.archNemesis = "The Syntax Error"
    this.powerLevel = 100
    this.energyLevel = 50
  }
  sayName(){
    console.log(this.name)
  }
  maximizeEnergy(){
    this.energyLevel = 1000
  }
  gainPower(powerGained){
    this.powerLevel = this.powerLevel + powerGained
  }
}
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var greatMan = new Superhero('Great Man', 'strength', 23)

console.log(greatMan)
var awesomeWoman = new Superhero('Awesome Woman', 'Laser eyes', 35)
console.log(awesomeWoman)
awesomeWoman.sayName()
awesomeWoman.maximizeEnergy()
awesomeWoman.gainPower(100)
console.log(awesomeWoman)
/*
// Reflection
// What parts were most difficult about this exerise?
honestly hardest part was remembering the syntax for everything. especially functions and classes
// What parts felt most comfortable to you?
i feel like im really getting the logic of it all. its easy to sort of keep all that together.
// What skills do you need to continue to practice before starting Mod 1?
i need to keep maintaining syntax practice. i might come up with a project to keep me honed.
*/
