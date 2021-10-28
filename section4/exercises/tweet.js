/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp){
  this.author = author
  this.content = content
  this.timeStamp = timeStamp
  this.numberOfLikes = 0
  this.comments = []
}
addLike(){
  this.numberOfLikes++
}
addNewComment(newComment){
  this.comments.push(newComment)
}
};
var tweet1 = new Tweet('Layton', 'I am winning, I swear', '11:30 12/1/2020')
var tweet2 = new Tweet('johnny', 'FOR THE EMPERIUM OF MAN!!!!', '3:46 11/5/2020')
var tweet3 = new Tweet('April', 'WAAAAGH!', '5:22 3/16/2021')
console.log(tweet1)
console.log(tweet2)
console.log(tweet3)

tweet1.addLike()
console.log(tweet1)

tweet2.addNewComment("BREAK DA' SPACE MARINES!!!")
console.log(tweet2)
