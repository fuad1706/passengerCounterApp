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
// let sentence = ["Hello", "my", "name", "is", "Per"];
// let greetingEl = document.getElementById("greeting-el");
//
// for (let i = 0; i < sentence.length; i++) {
// greetingEl.textContent += sentence[i] + " ";
// }
//
// for (let i = 10; i < 101; i += 10) {
// console.log(i);
// }
// let messages = [
// "Hey, how's it going?",
// "I'm great, thank you! How about you?",
// "All good. Been working on my portfolio lately.",
// "Same here!",
// "Great to hear",
// "🙌",
// ];
// for (let i = 0; i < messages.length; i += 1) {
// console.log(messages[i]);
// }
//
// let cardss = [7, 3, 9];
//
// for (let i = 0; i < cardss.length; i += 1) {
// console.log(cardss[i]);
// }

let sum = 0;
let cards = [];
//sum += 4;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");

let player = {
  name: "Per",
  chips: 145,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Would you like to draw a new card?";
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
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// console.log(4 === 3)  // false
// console.log(5 > 2)    // true
// console.log(12 > 12)  // false
// console.log(3 < 0)    // false
// console.log(3 >= 3)   // false
// console.log(11 <= 11) // false
// console.log(3 <= 2)   // false

// let randomNumber = Math.floor( Math.random() * 6 ) + 1
//
// console.log(randomNumber)

// function rollDice() {
// let randomNumber = Math.floor(Math.random() * 6) + 1;
// return randomNumber;
// }
// console.log(rollDice());

// let likesDocumentaries = true;
// let likesStartups = false;
//
// if (likesDocumentaries === true || likesStartups === false) {
// recommendMovie();
// }
// function recommendMovie() {
// console.log("Hey, check out this new film we think you will like!");
// }

// let person = {
// name: "fuad",
// age: 21,
// county: "nigeria",
// };
// function logData() {
// console.log(
// person.name +
// " is " +
// person.age +
// " years old he lives in " +
// person.county
// );
// }
// logData();

// let age = "";
//
// function checkAge(age) {
// if (age < 6) {
// return "free";
// } else if (age < 18) {
// return "child discount";
// } else if (age < 27) {
// return "student discount";
// } else if (age < 67) {
// return "full price";
// } else {
// return "senior citizen discount";
// }
// }
// console.log(checkAge(5));

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
// console.log("Top Five Largest Countries in the World")
// for (let i = 0; i < largeCountries.length; i++) {
// console.log("- " + largeCountries[i]);
// }
//

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");

console.log(largeCountries);

let hands = ["rock", "paper", "scissor"];
let randomElement = hands[Math.floor(Math.random() * hands.length)];
console.log(randomElement);
