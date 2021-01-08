// global variables
var scoresArray = [];
var initials = "";

// get reference to each element
var listElement = document.querySelector("#list");
var backElement = document.querySelector("#back");
var clearElement = document.querySelector("#clear");

init();

function init() {
  // get saved scores from localStorage
  var savedArray = JSON.parse(localStorage.getItem("scoresArray"));
  console.log(savedArray);
  if (savedArray !== null) {
    scoresArray = savedArray;
  }
  // get current initials and score from localStorage
  var currentInitials = localStorage.getItem("initials");
  console.log(currentInitials);
  var currentScore = localStorage.getItem("score");
  console.log(currentScore);
  // add current score to array
  // do not add score if user visits page before playing game
  // do not add score if user does not enter initials
  if (currentInitials !== null && currentInitials !== "") {
    initials = currentInitials;
    score = currentScore;
    var highscore = (scoresArray.length + 1) + ") " + initials + " - " + score;
    scoresArray.push(highscore);
    saveHighScores();
  }
  console.log(scoresArray);
  // clear current initials from localStorage so score will not be added again if user reloads page
  localStorage.setItem("initials", "");
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

// listen for back button (I used the form action to return to home page)

// listen for clear button
clearElement.addEventListener("click", function() {
  scoresArray = [];
  saveHighScores();
  displayHighScores();
});