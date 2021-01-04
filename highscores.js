// global variables
var scoresArray = [];

// get reference to each element
var listElement = document.querySelector("#list");
var backElement = document.querySelector("#back");
var clearElement = document.querySelector("#clear");

// get initials and score from localStorage
var initials = localStorage.getItem("initials");
console.log(initials);
var score = localStorage.getItem("score");
console.log(score);

// get saved scores from localStorage

// add current score to array and save in localStorage
var highscore = (scoresArray.length + 1) + ") " + initials + " - " + score;
scoresArray.push(highscore);
console.log(scoresArray);

// display list with number, initials, and score

// listen for back button

// listen for clear button