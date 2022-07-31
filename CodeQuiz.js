var startButton = document.querySelector("#start");
var resetButton = document.querySelector("reset");
var timerEl = document.querySelector("#timer");
var highscore = document.querySelector("highscore"); 
var questionEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answers");
var startPageEl= document.querySelector("#startpage");
var submitButton = document.getElementById("submit"); 
// var questionBox= document.querySelector("#questionbox");
// var questionHeader= document.querySelector("#questionheader");
// var options = document.querySelector("#options");


var questionArray = [
    {
    question: "What is Javascript",
    answer: [
        {choice:"A coding language that makes a page interactive", id: "a"},
        {choice: "Fancy latte art", id:"b"},
        {choice:"Pure despair", id: "c"},
        {choice: "A third party API", id: "d"}, 
    ],
        
    correct: "a",
},

{
    question: "what is the purpose of .concat()?",
    answer: [
        {choice: "Conning small mammals", id: "a"},
        {choice: "Adding the content of arrays together", id: "b"},
        {choice:"Obtaining a random number", id: "c"},
        {choice: "Taking arrays apart", id: "d"},
    ],
    
    correct: "b"
    
},

   {
    question:"In CSS, how can you individualize property assignments to HTML elements",
    answer: [

        {choice:"By giving them a special name", id: "a"}, 
        {choice:"By sorting them into their own Hogwarts House", id: "b"},
        {choice: "By using the class or ID selector", id:"c"},
        {choice: "MDN because it never lies", id: "d" },  
    ],
        correct: "c",
   },


    { 
    question: "In CSS, how can you prevent redundancies?",
    answer: [
        {choice:"Just don't do it", id: "a"}, 
        {choice: "A reset CSS file", id:"b"},
        {choice: "Using the root: property", id:"c"} ,
        {choice:"MDN because it never lies", id: "d"} 
    ],
        correct: "c"
},
        

];

var questions= 0;
var answers= 0;
var inQuiz = false;



function showQuestions() {
   
    //if (!inQuiz || quizArray === questionArray.length) return;
    questionEl.innerHTML = questionArray[questions].question;

    // for(let i=0; i < questions[questionArray].answer.length; i++){
    //     questionEl.style.display= "block";
    //     answerEl.style.display = "block";
    //     startPageEl.style.display = "none";

    // }
    
 
}
   


var secondsLeft= 60;
var timerInterval;

function startTimer() {
    timerEl.style.display = "block"; 
   
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent= secondsLeft + " seconds remaining";
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
       
        };
    
      }, 1000);
};


console.log(startTimer);

startButton.addEventListener("click", beginGame);



function beginGame(){
    secondsLeft = 60
    startTimer();
    showQuestions();
     startButton.style.display = "none"
}

console.log(beginGame);




//on title screen, user clicks button to begin quiz ~
// button disappears and timer starts ~
// first question displayed 
// user chooses either right/wrong answer; wrong answer results in 10s deduction from timer
// once choice is selected, window progresses to next question with the same parameters
// Once user reaches the end of the quiz, input box for initials and score displays
// Input displayed on "scoreboard"
//Option to reset and take the quiz again // var start= true;
// function showQuestion(id){
//     const question = document.getElementById("question");
    
//     question.innerText= Questions[id].choice;

//     const op1= document.getElementById("op1");
//     const op2= document.getElementById("op2");
//     const op3= document.getElementById("op3");
//     const op4= document.getElementById("op4");

//     op1.innerText = Questions[id].answer[0].text;
//     op2.innerText = Questions[id].answer[1].text;
//     op3.innerText = Questions[id].answer[2].text;
//     op4.innerText = Questions[id].answer[3].text;

//     op1.value = Questions[id].answer[0].isCorrect;
//     op2.value = Questions[id].answer[1].isCorrect;
//     op3.value = Questions[id].answer[2].isCorrect;
//     op4.value = Questions[id].answer[3].isCorrect;

//     var selected = "";

//     const option = document.getElementsByClassName("option");

//     option[0].addEventListener("click", () => {
//         if (selected==true){
//             window.alert("Correct!");
//         } else { wrongAnswer();

//         }
//     });
// if(start){
//     showQuestion("0");
// };

// const proceed = document.getElementsByClassName("proceed")[0];
// var id = 0;

// proceed.addEventListener("click", () => {
//     start=false;
//     if (id<3){
//         id++;
//         showQuestion(id);
//         console.log(id);
//     }
// })
// };