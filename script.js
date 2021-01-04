// global variables
var secondsRemaining = 100;
var questionsIndex = 0;

// store questions as objects
var question01 = {question: "Question01 goes here", choicesArray: ["abcdefg", "hijk", "lmnop"], answer: 2};
var question02 = {question: "Question02 goes here", choicesArray: ["qrs", "tuv", "wx", "yz"], answer: 3};
var question03 = {question: "Question03 goes here", choicesArray: ["true", "false"], answer: 0};
var questionsArray = [question01, question02, question03];

// get reference to each row on page
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

// functions to toggle rows on page
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

function showQuestionScreen() {
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
timerElement.children[0].children[0].textContent = "Time: " + secondsRemaining;
showStartScreen();

// listen for start button
startElement.addEventListener("click", function(eventObject) {
  if (eventObject.target.matches("button")) {
    showQuestionScreen();
    setTime();
    displayNextQuestion(questionsIndex);
  }
});

// start countdown timer
// after last question or timer expires, display score
function setTime() {
  var timerInterval = setInterval(function() {
    secondsRemaining--;
    timerElement.children[0].children[0].textContent = "Time: " + secondsRemaining;
    if(secondsRemaining === 0 || questionsIndex === questionsArray.length) {
      clearInterval(timerInterval);
      displayGameOver();
    }
  }, 1000);
}

// display next question
function displayNextQuestion(index) {
  questionElement.children[0].children[0].textContent = questionsArray[index].question;
  var choicesParent = choicesElement.children[0].children[0];
  choicesParent.innerHTML = "";
  for (var i = 0; i < questionsArray[index].choicesArray.length; i++) {
    var choice = document.createElement("button");
    choice.setAttribute("type", "button");
    choice.setAttribute("class", "btn btn-outline-secondary text-start");
    choice.textContent = (i + 1) + ") " + questionsArray[index].choicesArray[i];
    choicesParent.appendChild(choice);
  }
}

// listen for answer button
// if incorrect, subtract 10 seconds from timer
choicesElement.addEventListener("click", function(eventObject) {
  if(eventObject.target.matches("button")) {
    var answer = eventObject.target;
    var number = answer.textContent.charAt(0) - 1;
    var badgeParent = badgeElement.children[0].children[0];
    if (number === questionsArray[questionsIndex].answer) {
      displayBadge("green");
    }  
    else {
      displayBadge("red");
      secondsRemaining = secondsRemaining - 10;
    }  
    setTimeout(function() {
      badgeParent.innerHTML = "";
      questionsIndex = questionsIndex + 1;
      if (questionsIndex !== questionsArray.length) {
        displayNextQuestion(questionsIndex);
      }
    }, 1000);  
  }
});

// display badge for correct or incorrect
function displayBadge(state) {
  var badgeParent = badgeElement.children[0].children[0];
  var badge = document.createElement("span");
  if (state === "green") {
    badge.setAttribute("class", "badge rounded-pill bg-success");
    badge.textContent = "Correct!";
  }  
  else if (state === "red") {
    badge.setAttribute("class", "badge rounded-pill bg-danger");
    badge.textContent = "Wrong!";
  }  
  badgeParent.appendChild(badge);
}  

// display game over elements
function displayGameOver() {
  scoreElement.children[0].children[0].textContent = "Your score is: " + secondsRemaining;
  showGameOverScreen();
}

// listen for submit button
// go to highscores page
formElement.addEventListener("click", function(eventObject) {
  if (eventObject.target.matches("button")) {
    var initials = document.querySelector("#initials").value;
    localStorage.setItem("initials", initials);
  }
  localStorage.setItem("score", secondsRemaining);
});