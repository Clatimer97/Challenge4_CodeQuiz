# Challenge4_CodeQuiz

# Description of Project
The purpose of this project was to generate an interactive code quiz which uses dynamic HTML, CSS, and Javascript. Through the traversal of the DOM, this application was created. 

## Functionality
[HTML]
* Header element contains the timer inside a `<p>` element; seconds is the text content and the value of the time remaining is within the Javascript
* Created a hero element for style
* `<h2>` element contains the id quiz which is the value used to insert the quiz question
* Begin button which starts the game when clicked
* Empty `<ul>` element to contain answer choices dynamically created in java
* Highscore form `<div>` used to contain the end page with the score submit button, reset button, and text input
* Scoreboard element to keep track of user scores and initials; appends new list item with each new score

[CSS]
* Set variables at the beginning to prevent redundancy
* Use display: none in CSS which can be dynamically changed in Java to hide/show elements
* main > ul li used so that styling will apply as elements are created (since they do not exist before Java is applied)
* Hover element applied to answer choices so that user knows which answer they are selecting

[Javascript]
* set all global variables and querySelectors at the beginning of the file
* var for questions and answers is in an array
* EventListeners listen for a click and run the corresponding function
* `startTimer()` displays the timer and sets the interval; begins countdown and ends the quiz if the timer reaches 0
* `beginQuiz` displays the questions/answers and hides all other unrelated elements
* `showChoices` takes the answerNumber and gives it an index value of 0; 
the for loop runs for as long as the answerNumber value is less than the value of the length of the answers array within the questionArray variable; 
* `var currentChoice` creates a list item for each answer to display;
* "if" loop selects any choice with the id "Correct" in front of it and uses the substring method to remove the exact amount of string characters that id amounts to so that it doesn't show up on the actual answer buttons;
* Set the textContent of the list elements to the new text output created in the if loop and append the children to the `<ul>` parent element.
* `nextChoice()` adds a value of one to the questionNumber variable as the  quiz progresses from question to question; if statement stops the quiz if the questionNumber is higher than the number of questions within `var questionArray`
* `endQuiz` sets the value of gameover to true and hides the timer, question, and answer elements; It loads the scorepage and displays the score value which is equal to the number of correct questions
* `checkCorrect` targets the "correct:" id within the question array.
  If it is correct, the number of correct questions(score) increases and the window displays an alert that says "correct"
  If the "correct:" id is not within the answer selected, the window displays a "wrong" alert and ten seconds is deducted from secondsLeft
* The `EventListener` for the submit button triggers a prevent default method. `var highscoreInput` is equal to whatever the user puts into the input box on the score page. The variables `name` and `scores` are saved to local storage
* `renderScore` takes these values from local storage and converts them to a text value which can be displayed on the page under the scoreboard.
If statement says that if lastScore is not equal to nothing, display the text content to the page. 
* When the user refreshes the page, they can see their previous score and attempt the quiz again. 






## Assets
[!Screenshot](./Images/CodeQuizScrnsht.jpeg)
[LinktoRepository](https://github.com/Clatimer97/Challenge4_CodeQuiz)
[LinktoLiveApp]()

# References
* For my reset stylesheet, I used the Eric Meyer reset stylesheet which is a standardized reset stylsheet available on the internet. The link to reference it is posted below.
[LinktoStylesheet](https://meyerweb.com/eric/tools/css/reset/)

## Author
[@CallanLatimer](https://github.com/Clatimer97)