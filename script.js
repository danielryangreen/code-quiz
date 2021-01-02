var countdown = 100;
var score = 0;

var timerElement = document.getElementById("timer");
timerElement.innerHTML = "Time: " + countdown;

var scoreElement = document.getElementById("score");
scoreElement.innerHTML = "Your score is: " + score;

// store questions as objects
var question01 = {question: "Question01 goes here", choices: ["abcdefg", "hijk", "lmnop"], answer: 2};
var question02 = {question: "Question02 goes here", choices: ["qrs", "tuv", "wx", "yz"], answer: 3};
var question03 = {question: "Question03 goes here", choices: ["true", "false"], answer: 0};

// get reference to each element

// display start screen elements

// listen for start button

// start countdown timer

// display next question

// listen for answer

// check answer and display correct or incorrect

// if incorrect, subtract from timer

// after last question or timer expires, calculate score

// display game over elements

// listen for submit button

// go to highscores page

// display scores

// listen for clear highscores button

// listen for go back button