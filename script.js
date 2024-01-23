'use strict';
/**
 * ICS3UC Final Project S1 2023-24
 *
 * Author: Joe Junior
 * Description: This Application works on addition and
   multiplication of numbers.
 *
 */
// asking the user to choose between addition or multiplaction.


document.getElementById("start").addEventListener("click", add)
document.getElementById("begin").addEventListener("click",multiply)
document.getElementById("restart").addEventListener("click",substract)
document.getElementById("more").addEventListener("click",all)

function add() {

    console.log("welcome to Maths Quiz (addition)");
    // generating the first random number
    let num1 = Math.round(Math.random() * 50);
    // genrating numbers between 0 and 20
    let num2 = Math.round(Math.random() * 50);

    // ask user for their response
    let answer = prompt("what is the sum of " + num1 + " and " + num2
      + "?");

    // convert answer into a number
    answer = parseInt(answer);

    // calculate correct answer
    let correctAnswer = num1 + num2;

    // check if the answer is correct
   if (answer === correctAnswer) {
     return add();}
       else {
         console.log("sorry you're wrong. Try again. The correct answer is " + (num1 - num2));
       }
     let PlayAgain = prompt("Do you want to play again?");
     if (PlayAgain === "yes") {
       add()}
     else{
       console.log("Thank you for playing")
     }

   }


function multiply() {
  
    console.log("welcome to Maths Quiz (multiplication)")

    // Generate random numbers 
    let num1 = Math.round(Math.random() * 20);
    let num2 = Math.round(Math.random() * 20);

    // ask for their answer
    let answer = prompt("what is the product of " + num1 + " and " +
      num2 + "?");

    // convert answer into a number
    answer = parseInt(answer);

    // correct answer
    let correctAnswer = num1 * num2;

    //check if user's response is correct
    if (answer === correctAnswer) {
     return multiply();
    } else {
      console.log("sorry you're wrong. Try again. The correct answer is " + (num1 * num2));
    }
  let PlayAgain = prompt("Do you want to play again?");
  if (PlayAgain === "yes") {
    multiply()}
  else{
    console.log("Thank you for playing")
  }
  }


function substract() {
   
  console.log("welcome to Maths Quiz (substraction)")
  // generate random numbers
  let num1 = Math.round(Math.random() * 50);
  let num2 = Math.round(Math.random() * 50);

  // ask user for their response
  let answer = prompt("what is the difference of " + num1 + " and " + num2 + "?");

  // convert their answer to a number
  answer = parseInt(answer);

  // Correct answer
  let correctAnswer = num1 - num2;

  if (answer === correctAnswer) {
  return substract();}
    else {
      console.log("sorry you're wrong. Try again. The correct answer is " + (num1 - num2));
    }
  let PlayAgain = prompt("Do you want to play again?");
  if (PlayAgain === "yes") {
    substract()}
  else{
    console.log("Thank you for playing")
  }
  

}

function all() {
  console.log("welcome to Maths Quiz (addition, multiplication and substraction)")
  
  // generating the first random number
  let num1 = Math.round(Math.random() * 50);
  // genrating numbers between 0 and 20
  let num2 = Math.round(Math.random() * 50);

  // ask user for their response
  let answer = prompt("what is the sum of " + num1 + " and " + num2
    + "?");

  // convert answer into a number
  answer = parseInt(answer);

  // calculate correct answer
  let correctAnswer = num1 + num2;

  if (answer === correctAnswer) {
     console.log("you're correct");}
       else {
         console.log("sorry you're wrong. The correct answer is " + (num1 - num2));
       }
//mulltiplication
  let fig1 = Math.round(Math.random() * 20);
  let fig2 = Math.round(Math.random() * 20);

  // ask for their answer
  let ans = prompt("what is the product of " + fig1 + " and " +
    fig2 + "?");

  // convert answer into a number
  ans = parseInt(ans);

  // correct answer
  let correctAns= fig1 * fig2;

  //check if user's response is correct
  if (ans === correctAns) {
   console.log("you're correct");
  } else {
    console.log("sorry you're wrong. The correct answer is " + (fig1 * fig2));
  }
// substraction
  let number1 = Math.round(Math.random() * 50);
  let number2 = Math.round(Math.random() * 50);

  // ask user for their response
  let answer2 = prompt("what is the difference of " + number1 + " and " + number2 + "?");

  // convert their answer to a number
  answer2 = parseInt(answer2);

  // Correct answer
  let correctAnswer2 = number1 - number2;

  if (answer2 === correctAnswer2) {
  console.log("you're correct");}
    else {
      console.log("sorry you're wrong. The correct answer is " + (number1 - number2));
    }
  let PlayAgain = prompt("Do you want to play again?");
  if (PlayAgain === "yes") {
    all()}
  else{
    console.log("Thank you for playing")
  }
}