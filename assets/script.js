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
var correctnessEl = document.querySelector(".correctness");
var statusEl = document.querySelector(".status");
var highscoreEl = document.querySelector(".highscore");
var messageEl = document.querySelector(".message");
var highscoreListEl = document.querySelector("#highscore-list");
var initialsEl = document.querySelector("#initials");
var viewHighScoreButton = document.querySelector(".score-button")

// global variables required to run game
var questions = ["In which element do we place the javascript?", "What is the correct syntax to call a script called script.js", "What is the correct syntax for calling a function called 'testFunction'", "How do you write a conditional statement that executes code when i is equal to 5?", "How do you create a function?"];

var answers = ["<javascript>", "<js>", "<link>","<script>", 4 ,"<script src = 'script.js'>","<script link = 'script.js'>","<script href = script>", "<link src = 'script.js'>", 1, "var testFunciton", "testFunction()" , "<testFunction>", "<var x = testFunction()>", 2, "if i = 5 then", "if i === 5", "if (i==5)", "if (i is 5)", 3, "var testFunction",  "function = testFunction", "function testFunction()", "create.testFunction()", 3];

var questionOne = {
    question: "In which element do we place the javascript?",
    answerChoiceOne: "<javascript>", 
    answerChoiceTwo: "<js>",
    answerChoiceThree: "<link>",
    answerChoiceFour: "<script>", 
    correctKey: 4
}

var questionTwo = {
  question: "What is the correct syntax to call a script called script.js",
  answerChoiceOne: "<script src = 'script.js'>", 
  answerChoiceTwo: "<script link = 'script.js'>",
  answerChoiceThree: "<script href = script>",
  answerChoiceFour: "<link src = 'script.js'>", 
  correctKey: 1
}

var questionThree = {
  question: "What is the correct syntax for calling a function called 'testFunction'",
  answerChoiceOne: " var testFunciton", 
  answerChoiceTwo: "testFunction()",
  answerChoiceThree: "<testFunction>",
  answerChoiceFour: "<var x = testFunction()>", 
  correctKey: 2
}

var questionFour = {
  question: "How do you write a conditional statement that executes code when i is equal to 5?",
  answerChoiceOne: "if i = 5 then", 
  answerChoiceTwo: "if i === 5",
  answerChoiceThree: "if (i==5)",
  answerChoiceFour: "if (i is 5)", 
  correctKey: 3
}

var questionFive= {
  question: "How do you create a function?",
  answerChoiceOne: "var testFunction", 
  answerChoiceTwo: "function = testFunction",
  answerChoiceThree: "function testFunction()",
  answerChoiceFour: "create.testFunction()", 
  correctKey: 3
}

var seconds = 0;
var countdownTimer;

var questionTracker = 0;
var key = 0;
var finalScore = 0

var highscoreList = [];
console.log(typeof highscoreList);
console.log(highscoreList.length);
// functions required to run game

// render questions

function displayQuestion(num){
  if (num == 1){
  questionElement.textContent = questionOne.question;
  answerOneButton.textContent = questionOne.answerChoiceOne;
  answerTwoButton.textContent = questionOne.answerChoiceTwo;
  answerThreeButton.textContent = questionOne.answerChoiceThree;
  answerFourButton.textContent = questionOne.answerChoiceFour;
  directions.textContent = "";
  }
  else if(num == 2){

  questionElement.textContent = questionTwo.question;
  answerOneButton.textContent = questionTwo.answerChoiceOne;
  answerTwoButton.textContent = questionTwo.answerChoiceTwo;
  answerThreeButton.textContent = questionTwo.answerChoiceThree;
  answerFourButton.textContent = questionTwo.answerChoiceFour;
  directions.textContent = "";

  } else if (num == 3){
  questionElement.textContent = questionThree.question;
  answerOneButton.textContent = questionThree.answerChoiceOne;
  answerTwoButton.textContent = questionThree.answerChoiceTwo;
  answerThreeButton.textContent = questionThree.answerChoiceThree;
  answerFourButton.textContent = questionThree.answerChoiceFour;
  directions.textContent = "";
  } else if (num == 4){
    questionElement.textContent = questionFour.question;
    answerOneButton.textContent = questionFour.answerChoiceOne;
    answerTwoButton.textContent = questionFour.answerChoiceTwo;
    answerThreeButton.textContent = questionFour.answerChoiceThree;
    answerFourButton.textContent = questionFour.answerChoiceFour;
    directions.textContent = "";
  } else {
    questionElement.textContent = questionFive.question;
    answerOneButton.textContent = questionFive.answerChoiceOne;
    answerTwoButton.textContent = questionFive.answerChoiceTwo;
    answerThreeButton.textContent = questionFive.answerChoiceThree;
    answerFourButton.textContent = questionFive.answerChoiceFour;
    directions.textContent = "";
  }
}

// end game funcion

function endGame() {
    clearInterval(countdownTimer);
    finalScore = seconds;
    seconds = 0;
    questionTracker = 0;
    renderScores();
    startButton.style.display = "block";
    startButton.textContent = "try again";

  }

  // render scores

  function renderScores(){
    questionElement.style.display = "none";
    answersElement.style.display = "none";
    correctnessEl.style.display = "none";
    highscoreEl.style.display = "block";
    if (finalScore == 0){
      messageEl.textContent = "You lose, try again!"
    } else{
      messageEl.textContent = "All Done! Your score is " + finalScore + " seconds!";
    }

  }
  // render questions

  // render highsocre list

  // start button
  startButton.addEventListener('click', function () {
    // stop the function and do nothing if the game is playing
    if (seconds > 0) {
      return;
    }
  
    // initialize game
    questionTracker++;
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
   displayQuestion(questionTracker);

  });

// answer button even listeners
answerOneButton.addEventListener('click', function(){
  key = 1;
  if (key == answers[(questionTracker*5-1)]){
    statusEl.textContent = "Correct!";
    correctnessEl.style.display = "block";
    questionTracker++;
    displayQuestion(questionTracker);
  }
  else{
    statusEl.textContent = "Wrong!"
    correctnessEl.style.display = "block";
    seconds = seconds-5;
  }
  if (seconds == 0 || questionTracker > 5){
    endGame();
  }
})

answerTwoButton.addEventListener('click', function(){
  key = 2;
  if (key == answers[(questionTracker*5-1)]){
    statusEl.textContent = "Correct!";
    correctnessEl.style.display = "block";
    questionTracker++;
    displayQuestion(questionTracker);
  }
  else{
    statusEl.textContent = "Wrong!"
    correctnessEl.style.display = "block";
    seconds = seconds-5;
  }
  if (seconds == 0 || questionTracker > 5){
    endGame();
  }
})

answerThreeButton.addEventListener('click', function(){
  key = 3;
  if (key == answers[(questionTracker*5-1)]){
    statusEl.textContent = "Correct!";
    correctnessEl.style.display = "block";
    questionTracker++;
    displayQuestion(questionTracker);
  }
  else{
    statusEl.textContent = "Wrong!"
    correctnessEl.style.display = "block";
    seconds = seconds-5;
  }
  if (seconds == 0 || questionTracker > 5){
    endGame();
  }
})

answerFourButton.addEventListener('click', function(){
  key = 4;
  if (key == answers[(questionTracker*5-1)]){
    statusEl.textContent = "Correct!";
    correctnessEl.style.display = "block";
    questionTracker++;
    displayQuestion(questionTracker);
  }
  else{
    statusEl.textContent = "Wrong!"
    correctnessEl.style.display = "block";
    seconds = seconds-5;
  }
  if (seconds == 0 || questionTracker > 5){
    endGame();
  }
})


function storeHighscores() {

  localStorage.setItem("highscore", JSON.stringify(highscoreList + " " + finalScore));
}

function renderHighscores() {
console.log(highscoreList);
  highscoreListEl.innerHTML = "";


  for (var i = 0; i < highscoreList.length; i++) {

    var high = highscoreList[i] + " " + finalScore;

    var li = document.createElement("li");
    li.textContent = high;
    li.setAttribute("data-index", i);

    var list = document.createElement("li");

    highscoreListEl.appendChild(li);
    console.log(highscoreList);
  }
}

submitButton.addEventListener("click", function(){

  var initials = initialsEl.value.trim();

  if (initials === "") {
    return;
  }


  highscoreList.push(initials);
  initialsEl.value = "";

  storeHighscores();


})

console.log(finalScore);
console.log(localStorage.getItem("highscore"));

viewHighScoreButton.addEventListener("click", function(){

renderHighscores();


})