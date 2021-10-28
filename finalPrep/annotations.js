// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//create function buil a bear with arguments name, age, fur, clothes, specialpower
function buildABear(name, age, fur, clothes, specialPower) {
  // declare and assign variable greeting to interpolated string with name in it
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //declare variable demographics and assign to array
  var demographics = [name, age];
  // declare variable powerSaying and assign it to a concatenated string with specialPower
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //declare and assign object builtBear and give it a bunch of keys based on above info
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    // sets key cost to 50 bucks
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    //sets key isCuddly to boolean function true
    isCuddly: true,
  };
//ends function build a bear and returns the built bear as a value
  return builtBear
}
//builds a couple bears with the function from above. sets one argument to  an array
//which i never realized you could do
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// define function fizzbuz with arguments num1 num2 and range
function fizzBuzz(num1, num2, range) {
  // for loop that increments as many times as established in range
  for (var i = 0; i <= range; i++) {
    //if a number is divisible by num1 and num2, say fizzbuzz
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //if a number is devisible by num1, say fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      //if a number is divisible by num2, say buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
      //if a number isnt divisible by either number, just say the number you are on
    } else {
      console.log(i);
    }
  }
}
//call fizzbuz with numbers 3 and 5 100times
fizzBuzz(3, 5, 100);
//call fizzbuzz with numbers 5 and 8 400 times
fizzBuzz(5, 8, 400);
