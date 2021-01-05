// global variables
var scoresArray = [];
var initials = "";
var score = "";

// get reference to each element
var listElement = document.querySelector("#list");
var backElement = document.querySelector("#back");
var clearElement = document.querySelector("#clear");

init();

function init() {
  // get saved scores from localStorage
  var savedArray = JSON.parse(localStorage.getItem("scoresArray"));
  if (savedArray !== null) {
    scoresArray = savedArray;
  }
  // get current initials and score from localStorage
  var currentInitials = localStorage.getItem("initials");
  var currentScore = localStorage.getItem("score");
  // add current score to array
  if (currentInitials !== "") {
    initials = currentInitials;
    score = currentScore;
    var highscore = (scoresArray.length + 1) + ") " + initials + " - " + score;
    scoresArray.push(highscore);
    saveHighScores();
  }
  // clear current initials and score from localStorage
  localStorage.setItem("initials", "");
  localStorage.setItem("score", "");
  // display list
  displayHighScores();
}

// display list with number, initials, and score
function displayHighScores() {
  listParent = listElement.children[0].children[0];
  listParent.innerHTML = "";
  for (var i = 0; i < scoresArray.length; i++) {
    var highscore = document.createElement("li");
    highscore.setAttribute("class", "list-group-item");
    highscore.textContent = scoresArray[i];
    listParent.appendChild(highscore);
  }    
}    

function saveHighScores() {
  localStorage.setItem("scoresArray", JSON.stringify(scoresArray));
}    

// listen for back button

// listen for clear button
clearElement.addEventListener("click", function() {
  scoresArray = [];
  saveHighScores();
  displayHighScores();
});