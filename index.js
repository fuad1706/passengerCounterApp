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

let countEl = document.getElementById("counting");

console.log(countEl)

let count = 0;

function increment(){
  count = count + 1
  countEl.innerText = count
  console.log(count)

}
function save() {
  console.log(count)
}