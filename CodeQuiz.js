var startButton = document.querySelector("#start");
//var nextButton = document.querySelector("#next");
var highscoreButton= document.querySelector("#highscore-form-btn");
var timerEl = document.querySelector("#timer");
var highscore = document.querySelector("highscore-form"); 
var questionEl = document.querySelector("#quiz");
var answerEl = document.querySelector("#answers");
var instructions = document.querySelector("#instructions")
var startPageEl= document.querySelector("#startpage");
var submitButton = document.getElementById("submit"); 
var highscore = document.querySelector("#highscore")
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
        "In CSS, how can you prevent redundancies?"
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
        "MDN because it never lies"
        ],

        ["Just don't do it",
        "A reset CSS file",
        "Correct: Using root:",
        "MDN because it never lies"
        ]

    ]

 };

 console.log(questionArray);

    
startButton.addEventListener("click", beginQuiz);
answerEl.addEventListener("click", checkCorrect);

    
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


console.log(startTimer);



function beginQuiz(){
    gameOver = false;
    secondsLeft = 60;
    questionNumber= 0;
    startTimer();
    showQuestions();
     startButton.style.display = "none";
     document.querySelector("#instructions").style.display = "none";
};

console.log(beginQuiz);

function showQuestions() {
    questionEl.textContent = questionArray.questions[questionNumber];
    showChoices();
 };

 console.log(showQuestions);

 function showChoices() {

    answerEl.innerHTML = '';
    for (answerNumber= 0; answerNumber < (questionArray.answers[questionNumber].length); answerNumber++){
        var currentChoice = document.createElement("li");
        var fade = questionArray.answers[questionNumber][answerNumber];

        if(questionArray.answers[questionNumber][answerNumber].includes("Correct:")){
            fade = questionArray.answers[questionNumber][answerNumber].substring(8, questionArray.answers[questionNumber][answerNumber].length);
            currentChoice.id= "Correct";
           
        }
            currentChoice.textContent= fade;
            answerEl.appendChild(currentChoice);
    }
    return;

 };

 console.log(showChoices);

 function nextChoice() {
    questionNumber++;
    if (questionNumber >= questionArray.questions.length){
        endQuiz();
    } else {
        showChoices();
    }
    return;
 };

 console.log(nextChoice);

 function endQuiz(){
    gameOver= true;
    timerEl.style.display = "none";
    questionEl.style.display = "none"
    answerEl.innerHTML = '';
    highscore.textContent= numCorrect;
    document.querySelector("#highscore-form").style.display= "block";
    return;
 }

console.log(endQuiz);

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

