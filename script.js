// global variables
var secondsRemaining = 100;
var questionsIndex = 0;
var clickCounter = 0;

// store questions as objects
var question01 = { question: "Which word best describes the purpose of JavaScript?", choicesArray: ["Structure", "Presentation", "Behavior"], answer: 2 };
var question02 = { question: "Which tag is used to add JavaScript to the page?", choicesArray: ["<link>", "<script>", "<style>", "<dom>"], answer: 1 };
var question03 = { question: "JavaScript is case sensitive.", choicesArray: ["True", "False"], answer: 0 };
var question04 = { question: "Which syntax is used to indicate a single line comment in JavaScript?", choicesArray: ["<!--  -->", "/*  */", "// "], answer: 2 };
var question05 = { question: "Which method could be used to get the user's name?", choicesArray: ["alert()", "confirm()", "prompt()", "console.log()"], answer: 2 };
var question06 = { question: "What is the purpose of an if/else statement?", choicesArray: ["Sequence", "Selection", "Iteration"], answer: 1 };
var question07 = { question: "Which brackets are used to define an array?", choicesArray: ["[ ]", "( )", "{ }"], answer: 0 };
var question08 = { question: "The index of the first item in an array is 1.", choicesArray: ["True", "False"], answer: 1 };
var question09 = { question: "What is the purpose of a for loop?", choicesArray: ["Sequence", "Selection", "Iteration"], answer: 2 };
var question10 = { question: "Coding is so fun!", choicesArray: ["True", "False"], answer: 0 };
// var question00 = { question: "Question00 goes here", choicesArray: ["abcdefg", "hijk", "lmnop"], answer: 2 };
var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];

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
startElement.addEventListener("click", function (eventObject) {
  if (eventObject.target.matches("button")) {
    showQuestionScreen();
    setTime();
    displayNextQuestion(questionsIndex);
  }
});

// start countdown timer
// after last question or timer expires, display score
function setTime() {
  var timerInterval = setInterval(function () {
    secondsRemaining--;
    timerElement.children[0].children[0].textContent = "Time: " + secondsRemaining;
    if (secondsRemaining === 0 || questionsIndex === questionsArray.length) {
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
// use clickCounter to ignore additional clicks
// if incorrect, subtract 10 seconds from timer
choicesElement.addEventListener("click", function (eventObject) {
  if (eventObject.target.matches("button")) {
    clickCounter++;
    console.log(clickCounter);
    if (clickCounter === 1) {
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
      setTimeout(function () {
        badgeParent.innerHTML = "";
        questionsIndex = questionsIndex + 1;
        if (questionsIndex !== questionsArray.length) {
          displayNextQuestion(questionsIndex);
        }
        clickCounter = 0;
      }, 1000);
    }
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
formElement.addEventListener("click", function (eventObject) {
  if (eventObject.target.matches("button")) {
    var initials = document.querySelector("#initials").value.trim();
    localStorage.setItem("initials", initials);
  }
  localStorage.setItem("score", secondsRemaining);
});