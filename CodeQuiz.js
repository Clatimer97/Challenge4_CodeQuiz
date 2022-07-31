var startButton = document.querySelector("#start");
var resetButton = document.querySelector("reset");
var timerEl = document.querySelector("#timer");
var highscore = document.querySelector("highscore"); 
var questionBox= document.querySelector("#questionbox");
var questionHeader= document.querySelector("#questionheader");
var options = document.querySelector("#options");


const Questions = [{
    id: 0,
    choice: "What is Javascript",
    answer: [{text: "A coding language that makes a page interactive", isCorrect: true},
        {text:"Fancy latte art", isCorrect: false},
        {text:"Pure despair", isCorrect:false},
        {text:"A third party API", isCorrect:false}
    ]
},

    {id:1,
    decision: "what is the purpose of .concat()?",
    answer: [{text: "Conning small mammals", isCorrect: false},
    {text:"Adding the content of arrays together", isCorrect: true},
    {text:"Obtaining a random number", isCorrect:false},
    {text:"Taking arrays apart", isCorrect:false}
    ]
},

   { id:2,
    choice:"In CSS, how can you individualize property assignments to HTML elements",
    answer: [{text: "By giving them a special name", isCorrect: false},
    {text:"By sorting them into their own Hogwarts House", isCorrect: false},
    {text:"By using the class or ID selecto", isCorrect: true},
    {text:"MDN because it never lies", isCorrect:false}
    ] 
   },

    { id: 3,
    choice: "In CSS, how cam you prevent redundancies?",
    answer: [{text: "Just don't do it", isCorrect: false},
    {text:"", isCorrect: false},
    {text:"Using the root: property", isCorrect: true},
    {text:"MDN because it never lies", isCorrect:false}
    ],
}


];
  console.log(typeof choice);  

//"what is the purpose of .concat()?",
  //  "In HTML, which is not a semantic element?",
    //"In CSS, how do you prevent redundancies in assigning qualities?",
//    "In CSS, how can you individualize property assignments to HTML elements?",
 

 

  //  ["Conning small mammals", 
   // "Adding the content of arrays together",
  //  "
  //  "Taking arrays a"part

   




    
      
  
  //answer: "A coding language that makes a page interactive"
   
      // ["Conning small mammals", "Adding the content of arrays together", "Obtaining a random number", "Taking arrays apart"],
        //answer: "Adding the content of arrays together"


       //choices:["aside", "div","header", "main"],
       // answer: "div"
   
    
      //  choices: ["Just don't do it", "Using the root: property", "A reset CSS file", "Praying"],
       // answer: "Using the root: property"
//
      //  question: "In CSS, how can you individualize property assignments to HTML elements?",
      //  choices: ["By giving them a special name", "By sorting them into their own Hogwarts House","By using the class or ID selector", "MDN because it never lies"],
      //  answer: "By using the class or ID selector"

var start= true;
function showQuestion(id){
    const question = document.getElementById("question");
    question.innerHTML= Questions[id].choice;
    const op1= document.getElementById("op1");
    const op2= document.getElementById("op2");
    const op3= document.getElementById("op3");
    const op4= document.getElementById("op4");

    op1.innerHTML = Questions[id].answer[0].text;
    op2.innerHTML = Questions[id].answer[1].text;
    op3.innerHTML = Questions[id].answer[2].text;
    op4.innerHTML = Questions[id].answer[3].text;

    op1.value = Questions[id].answer[0].isCorrect;
    op2.value = Questions[id].answer[1].isCorrect;
    op3.value = Questions[id].answer[2].isCorrect;
    op4.value = Questions[id].answer[3].isCorrect;

    var selected = "";

    const option = document.getElementsByClassName("option");

    option[0].addEventListener("click", () => {
        if (selected==true){
            window.alert("Correct!");
        } else { wrongAnswer();

        }
    });
if(start){
    showQuestion("0");
};

const proceed = document.getElementsByClassName("proceed")[0];
var id = 0;

proceed.addEventListener("click", () => {
    start=false;
    if (id<3){
        id++;
        showQuestion(id);
        console.log(id);
    }
})
};

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

console.log(showQuestion)
console.log(startTimer);

startButton.addEventListener("click", beginGame);



function beginGame(){
    secondsLeft = 60
    startTimer();
    showQuestion();
     startButton.style.display = "none"
}


//showQuestion(0
console.log(showQuestion);
console.log(beginGame);


function wrongAnswer(){
    
    if (selected==false){
            secondsLeft -= 10
            window.alert("Wrong!");
        }; 
};


//on title screen, user clicks button to begin quiz ~
// button disappears and timer starts ~
// first question displayed 
// user chooses either right/wrong answer; wrong answer results in 10s deduction from timer
// once choice is selected, window progresses to next question with the same parameters
// Once user reaches the end of the quiz, input box for initials and score displays
// Input displayed on "scoreboard"
//Option to reset and take the quiz again 