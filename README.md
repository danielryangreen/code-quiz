# Code Quiz
## Description
Timed coding quiz with multiple-choice questions.

The user interface is made entirely with Bootstrap. There is no additional CSS. After the user clicks the start button, the timer begins to count down from 100 seconds. There are 10 multiple-choice and true/false questions. The number of choices varies from 2 to 4. After the user selects an answer, a green or red badge is displayed to indicate if the answer is correct or incorrect. If the answer is incorrect, 10 seconds are subtracted from the timer. The badge is displayed for 1 second before the next question is presented.

After all of the questions are answered or the timer reaches zero, the score is displayed. The score is simply the remaining time on the timer. Below the score, there is a form for the user to enter their initials. The user's initials and score are added to the list of high scores. If the user does not enter their initials, then their score is not added to the list. The high scores are saved in local storage. There is a button that clears the high scores.

As I was developing this application, I discovered and fixed 3 bugs.
1. I used local storage to transfer the initials and score from the home (quiz) page to the high scores page. After clearing the browser history, I discovered that the first high score was displayed as "null - null" if the user visited the high scores page before taking the quiz for the first time.
2. If the user switched back and forth between the home (quiz) page and the high scores page or just reloaded the high scores page after there were items in the list, the most recent item was added to the list again each time.
3. The user could click multiple answers while the timeout was displaying the badge. I added a counter variable so the code that checks the answer and displays the badge only executes on the first click.

Overall I'm quite pleased with the appearance and functionality of the application, but there is one behavior that I'm not completely satisfied with. The user cannot escape from the quiz or the game over form by clicking home on the navbar. The user can escape to the high scores page. I'm not sure if this is a bug or a feature, but as a web user myself, I usually expect the home link on a navbar to take me back to the beginning no matter where I am in the site.

Some ideas for further development include:
- [ ] Presenting the questions in random order
- [ ] Presenting the choices for each question in random order
- [ ] Sorting the high scores or highlighting the max score
- [ ] Identifying the correct answers for the questions that were answered incorrectly

Deployed at [GitHub Pages](https://danielryangreen.github.io/code-quiz/)

See the repo at [Github](https://github.com/danielryangreen/)
## Installation
Open __index.html__ in your favorite browser!

View the code in your favorite text editor. I suggest VS Code.
## Usage
Here is a mock-up that demonstrates the application functionality.

![animation of coding quiz](Assets/04-web-apis-homework-demo.gif)
## Credits
Built with [Bootstrap 5.0](https://getbootstrap.com/)

The mock-up animation was provided by [Trilogy Education Services](https://trilogyed.com/)
## License
MIT License