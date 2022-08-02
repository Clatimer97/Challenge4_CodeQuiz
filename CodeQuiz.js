var startButton = document.querySelector("#start");
var resetButton = document.querySelector("#reset");
var submitButton= document.querySelector("#name-button");
var highscoreForm = document.querySelector("#highscore-form");
var timerEl = document.querySelector("#timer");
var questionEl = document.querySelector("#quiz");
var answerEl = document.querySelector("#answers");
var instructions = document.querySelector("#instructions")
var startPageEl= document.querySelector("#startpage");
var highscore = document.querySelector("#highscore");
var championHall = document.querySelector("#hall");
var input = document.querySelector("#champion")
var questionNumber= 0;
var answerNumber=0;
var numCorrect = 0;
var secondsLeft= 60;
var gameOver = true;
var timerInterval;

var questionArray = {
  questions:
   [
        "What is Javascript?", 
        "what is the purpose of .concat()?",
        "In CSS, how can you individualize property assignments to HTML elements?",
        "In CSS, how can you prevent redundancies?",
        "Which of these is not a semantic element in HTML?"
    ],

answers: [
        [
          "Correct: A coding language that makes a page interactive", 
          "Fancy latte art",
          "Pure despair",
          "A third party API"
        ],

        [
          "Conning small mammals",
          "Correct: Adding the content of arrays together",
          "Obtaining a random number",
          "Taking arrays apart"
        ],

        [
          "By giving them a special name",
          "By sorting them into their own Hogwarts House",
          "Correct: By using the class or ID selector",
          "Watching cartoons"
        ],

        [
          "Just don't do it",
          "A reset CSS file",
          "Correct: Using root:",
          "MDN because it never lies"
        ],

        [
          "main",
          "Correct: div",
          "header",
          "footer"
        ]


    ]

 };

    
startButton.addEventListener("click", beginQuiz);
answerEl.addEventListener("click", checkCorrect);


 // timer element with parameters to clear the interval if the secondsLeft reaches 0 and call the endQuiz function   
function startTimer() {
    timerEl.style.display = "block"; 
   
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent= secondsLeft + " seconds remaining";
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
         
        };
        if(secondsLeft<1){
           endQuiz() 
        }
         
      }, 1000);
      return;
};

//sets the gameover value to false, starts the timer, shows question choices, and hides the startbutton/instructions
function beginQuiz(){
    gameOver = false;
    secondsLeft = 60;
    questionNumber= 0;
    startTimer();
    showQuestions();
     startButton.style.display = "none";
     document.querySelector("#instructions").style.display = "none";
     document.querySelector("#scoreboard").style.display= "none";
     document.querySelector("footer").style.display = "none"
};

// console.log(beginQuiz);

//sets the inner text of the question element to the question number within the question array (some unknown bug not displaying next question)
function showQuestions() {
    showChoices();
 };

//  console.log(showQuestions);

 //sets the HTML text to null; 
 function showChoices() {

    answerEl.innerHTML = '';
     questionEl.textContent = questionArray.questions[questionNumber];
    //Answer number inital value is set to 0, runs the loop for the length value of the question array
    for (let answerNumber= 0; answerNumber < (questionArray.answers[questionNumber].length); answerNumber++){
        //current choice variable creates a list element
        var currentChoice = document.createElement("li");
        //fade variable is equal to the value the answers value within the quesiton array
        var fade = questionArray.answers[questionNumber][answerNumber];

        //if a given value within the answers array has the id "Correct" attached to it, remove the text value of that id so 
        // it doesnt show up on the actual quiz app

        if(questionArray.answers[questionNumber][answerNumber].includes("Correct:")){
            fade = questionArray.answers[questionNumber][answerNumber].substring(8, questionArray.answers[questionNumber][answerNumber].length);
            currentChoice.id= "Correct";
           
        }
            //sets the text content of the list element 
            currentChoice.textContent= fade;
            //appends list elements to the parent so that all of the options are displayed
            answerEl.appendChild(currentChoice);
            
    }
    return;

 };

//ends quiz if questionNumber is greater than the length of the question array in var questionArray; otherwise the quiz keeps cycling
 function nextChoice() {
    questionNumber++;

    if (questionNumber >= questionArray.questions.length){
        endQuiz();
    } else {
        showChoices();
    }
   
 };

 //ends quiz and hides/shows appropriate elements
 function endQuiz(){
    gameOver= true;
    timerEl.style.display = "none";
    questionEl.style.display = "none";
    answerEl.innerHTML = '';
    highscore.textContent= numCorrect;
    document.querySelector("#highscore-form").style.display= "block";
    document.querySelector("#scoreboard").style.display= "block";
    return;
 }

// looks for "Correct:" id and adds a value of one to the the score if the answer is correct otherwise it deducts ten seconds from secondsLeft
function checkCorrect(event) {
        if (event.target=answerEl){
            console.log(event.target)

        if(event.target.id.includes("Correct")){
            numCorrect++
            window.alert("Correct!")
        }

        if(!event.target.id.includes("Correct")) {
            secondsLeft -= 10;
            window.alert("Wrong!")
    }  
    nextChoice();
} 
    return;
};

//saves highscores to local storage and displays them in the score section
submitButton.addEventListener("click", function(event){
event.preventDefault();
var highscoreInput = input.value;
var highscores = {
    name: highscoreInput,
    scores: numCorrect
};

localStorage.setItem("highscores", JSON.stringify(highscores))

});


function renderScore(){
    var lastScore = JSON.parse(localStorage.getItem("highscores"));
    console.log(lastScore.name)
    if (lastScore !== null){
        document.getElementById("list").textContent = lastScore.name + " " + lastScore.scores
    }

};

renderScore();

 


