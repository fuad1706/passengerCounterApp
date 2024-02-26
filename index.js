// document.getElementById("count").innerText = 5;
//
// let myAge = 335;
// console.log(myAge);

// let myAge = 35;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

//re-assign
// let count = 50;
// count = count + 50;
// console.log(count);
// count = count - 75;
// console.log(count);
// count = count + 45;
// console.log(count);
// intialize the count as 0

// for the increment button
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// function increment() {
// console.log("The button was clicked")
// }
//

// function fgHert(){
// console.log(42)
// }

// let lap3 = 34;
// let lap4 = 33;
// let lap5 = 36;
//
// function logLapTime() {
// let totalTime = lap3 + lap4 + lap5;
// console.log(totalTime);
// }
// logLapTime()

// let lapsCompleted = 0
//
// function incrementLap(){
//
// lapsCompleted = lapsCompleted + 2
// }
// incrementLap()
// incrementLap()
// incrementLap()
// console.log(lapsCompleted)

// let countEl = document.getElementById("counting");
// let saveEl = document.getElementById("save-el")
//
// console.log(saveEl);

// let count = 0;
//
// function increment(){
// count += 1
// countEl.textContent = count

// }
// function save() {
//
// let countStr = count + " - ";
// saveEl.textContent += countStr;
// countEl.textContent = 0
// count = 0
// console.log(count)
// }

//Blackjack App

// let firstCard = 4;
// let secondCard = 17;
//
// let sum = firstCard + secondCard + 30;
//
// console.log(sum);
//
// if (sum < 21) {
// console.log("Do you wan to draw a new card ?");
// } else if (sum === 21) {
// console.log("Yippee You've got Blackjack!");
// } else {
// console.log("You are out of the game");
// }
//
// let clubAge = 21;
//
// if (clubAge === 21) {
// console.log("You are welcome");
// } else {
// console.log("You are denied entry");
// }
//
// let eligibleAge = 105;
//
// if (eligibleAge < 100) {
// console.log("Not Eligible");
// } else if (eligibleAge === 100) {
// console.log("Here is your birthday card from the King");
// } else {
// console.log("Not eligible, you have already gotten one");
// }
for(let i = 10; i < 101; i += 10){
  console.log(i)
}
let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear",
  "🙌"
]
for( let i = 0; i < messages.length; i += 1){
  console.log(messages[i])
}




let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let cards = [firstCard + secondCard];
//sum += 4;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

function startGame() {
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  console.log("Drawing a new card from the deck");
  let card = 7;
  sum += card;
  cards.push(card);
  renderGame();
}

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // false
// console.log(11 <= 11) // false
// console.log(3 <= 2)   // false
