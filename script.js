// global variables
var secondsRemaining = 10;
var score = 0;

// store questions as objects
var question01 = {question: "Question01 goes here", choicesArray: ["abcdefg", "hijk", "lmnop"], answer: 2};
var question02 = {question: "Question02 goes here", choicesArray: ["qrs", "tuv", "wx", "yz"], answer: 3};
var question03 = {question: "Question03 goes here", choicesArray: ["true", "false"], answer: 0};
var questionsArray = [question01, question02, question03];

// get reference to each element
var timerElement = document.querySelector("#timer");
var titleElement = document.querySelector("#title");
var rulesElement = document.querySelector("#rules");
var startElement = document.querySelector("#start");
var questionElement = document.querySelector("#question");
var choicesElement = document.querySelector("#choices");
var badgeElement = document.querySelector("#badge");
var game_overElement = document.querySelector("#game-over");
var scoreElement = document.querySelector("#score");
var formElement = document.querySelector("#form");

function showStartScreen() {
  timerElement.classList.remove("d-none");
  titleElement.classList.remove("d-none");
  rulesElement.classList.remove("d-none");
  startElement.classList.remove("d-none");
  questionElement.classList.add("d-none");
  choicesElement.classList.add("d-none");
  badgeElement.classList.add("d-none");
  game_overElement.classList.add("d-none");
  scoreElement.classList.add("d-none");
  formElement.classList.add("d-none");
}

function showQuizScreen() {
  timerElement.classList.remove("d-none");
  titleElement.classList.add("d-none");
  rulesElement.classList.add("d-none");
  startElement.classList.add("d-none");
  questionElement.classList.remove("d-none");
  choicesElement.classList.remove("d-none");
  badgeElement.classList.remove("d-none");
  game_overElement.classList.add("d-none");
  scoreElement.classList.add("d-none");
  formElement.classList.add("d-none");
}

function showGameOverScreen() {
  timerElement.classList.remove("d-none");
  titleElement.classList.add("d-none");
  rulesElement.classList.add("d-none");
  startElement.classList.add("d-none");
  questionElement.classList.add("d-none");
  choicesElement.classList.add("d-none");
  badgeElement.classList.add("d-none");
  game_overElement.classList.remove("d-none");
  scoreElement.classList.remove("d-none");
  formElement.classList.remove("d-none");
}

// display start screen elements
// showStartScreen();

timerElement.children[0].children[0].textContent = "Time: " + secondsRemaining;

// listen for start button

// start countdown timer
function setTime() {
  var timerInterval = setInterval(function() {
    secondsRemaining--;
    timerElement.children[0].children[0].textContent = "Time: " + secondsRemaining;
    if(secondsRemaining === 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
}
setTime();

// display next question
showQuizScreen();
function displayNextQuestion(index) {
  questionElement.children[0].children[0].textContent = questionsArray[index].question;
  for (var i = 0; i < questionsArray[index].choicesArray.length; i++) {
    var choice = document.createElement("button");
    choice.setAttribute("type", "button");
    choice.setAttribute("class", "btn btn-outline-secondary text-start");
    choice.textContent = (i + 1) + ") " + questionsArray[index].choicesArray[i];
    choicesElement.children[0].children[0].appendChild(choice);
  }
}
displayNextQuestion(0);

// listen for answer

// check answer and display correct or incorrect

// if incorrect, subtract from timer

// after last question or timer expires, calculate score

// display game over elements
// showGameOverScreen();
scoreElement.children[0].children[0].textContent = "Your score is: " + score;

// listen for submit button

// go to highscores page