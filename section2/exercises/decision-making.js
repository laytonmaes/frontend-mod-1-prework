/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 2;
var bearClothing = "";
var bearChoice = 3;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
// basically we are asking if the value of door choice is the first door or any other door.
// then, if its the first door, we output that the piece of clothing the bear will put
//on is a hat, and all other choices it will put on a scarf.

2. What variable has a new value assigned to it after the first if statement executes?
//bear clothing will have a new value once the first if statement executes

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//it would still be a scarf, even though there is no third door because the if statement
//just checks if it is a 1 or not.

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
// you take whatever value has been assigned to bearChoice and output different things depending on
// its value. 1,2,and 3 have their own assigned messages, but any other number will have
//the same output, different from the first 3.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
// he tries to put on a small hat, it tells you its too small, and you tell him it is and he starts to cry

7. What is your favorite ending?
//be friends with that poor bear. he tryna put on clothes too small and he needs a friend.
*/
