// var for html elements
var scoreButton = document.querySelector(".score-button");
var startButton = document.querySelector(".button-start");
var answerOneButton = document.querySelector("#answer1");
var answerTwoButton = document.querySelector("#answer2");
var answerThreeButton = document.querySelector("#answer3");
var answerFourButton = document.querySelector("#answer4");
var submitButton = document.querySelector("#submit");
var timerElement = document.querySelector(".timer-count");
var answersElement = document.querySelector(".Answers");
var questionElement = document.querySelector(".Question");
var directions = document.querySelector(".directions");

// global variables required to run game
var questions = ["Question1", "Question 2", " Question 3", "Question 4"];
var answers = ["Answer 1", "Answer 1", "Answer 1","Answer 1","Answer 1","Answer 1","Answer 1","Answer 1"];
var questionOne = {
    question: "question1",
    answerChoiceOne: "answer1", 
    answerChoiceTwo: "answer2",
    answerChoiceThree: "answer3",
    answerChoiceFour: "answer4", 
    correctKey: 4
}
var seconds = 0;
var countdownTimer;

var questionTracker = 0;

// functions required to run game

// end game funcion

function endGame() {
    clearInterval(countdownTimer);
    seconds = 0;
  }

  // render scores

  // render questions

  // render highsocre list

  // start button
  startButton.addEventListener('click', function () {
    // stop the function and do nothing if the game is playing
    if (seconds > 0) {
      return;
    }
  
    // initialize game
    seconds = 75;
    timerElement.setAttribute("display", "block");
    timerElement.textContent = "Time: " + seconds;

 
  
    // start the countdown
    countdownTimer = setInterval(function () {
      seconds = seconds - 1;
      timerElement.textContent = "Time: " + seconds;
  
      // game over if countdown reaches 0
      if (seconds === 0) {
        endGame();
      }
    }, 1000);

// show answer buttons, hide start button
    answerOneButton.style.display = "block";
    answerTwoButton.style.display = "block";
    answerThreeButton.style.display = "block";
    answerFourButton.style.display = "block";
    startButton.style.display = "none";

    
// display question and answer options
    questionElement.textContent = questionOne.question;
    answerOneButton.textContent = questionOne.answerChoiceOne;
    answerTwoButton.textContent = questionOne.answerChoiceTwo;
    answerThreeButton.textContent = questionOne.answerChoiceThree;
    answerFourButton.textContent = questionOne.answerChoiceFour;
    directions.textContent = "";

  });

//   answerOneButton.addEventListener('click', function(){

//   })