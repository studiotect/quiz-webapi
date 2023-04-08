var questionBank = [
  {
    text: "What is the keyword to define a variable?",
    choices: ["If", "var", "else", "for"],
    answer: 1
  },
  {
    text: "What is the question 2?",
    choices: ["c1", "c2", "c3", "c4"],
    answer: 3
  },
  {
    text: "What is the question 3?",
    choices: ["g1", "g2", "g3"],
    answer: 0
  },
];
var currentQuestion = 0;
var points = 0;
var timeRemaining = 10;
var countdownEl = document.getElementById('countdown');
var countdownInterval;
var initials = "";
var highscore = ""

document.getElementById("startBtn").addEventListener("click",function(){
  startBtn.setAttribute("style", "visibility: hidden");
  question.setAttribute("style", "visibility: visible");
  countdownEl.setAttribute("style", "visibility: visible");
  startTimer();
  displayQuestion();
})
  
function startTimer(){
  countdownInterval = setInterval(updateCountdown, 1000);
  function updateCountdown(){
    countdownEl.textContent= `Time: ${timeRemaining}`;
    timeRemaining--;
    if(timeRemaining === 0){
      clearInterval(countdownInterval);
      quizEnd();
  }
  }
}

function displayQuestion() {
  var divEl = document.getElementById("question");
  divEl.innerHTML="";
  var pEl = document.createElement("p");
  pEl.textContent = questionBank[currentQuestion].text;
  divEl.appendChild(pEl);
  for (var i = 0; i < questionBank[currentQuestion].choices.length;i++) {
    var btnEl = document.createElement("button");
    btnEl.textContent = questionBank[currentQuestion].choices[i];
    btnEl.dataset.choice=i;
    btnEl.addEventListener("click",choiceClick);
    divEl.appendChild(btnEl);
  }
}

function choiceClick(event){
  if (questionBank[currentQuestion].answer==event.target.dataset.choice){
    points=points+50;
    console.log("correct")
  }
  else {
    timeRemaining=timeRemaining-5;
    console.log("wrong")
    console.log("Time = ", timeRemaining);
  }

  currentQuestion++;
  if (currentQuestion >= questionBank.length) {
    quizEnd();
  } else {
  displayQuestion();
  }
}
function quizEnd(){
  var divEl = document.getElementById("scoreboard");
  var pEl = document.createElement("p");
  //pEl.textContent = `Score: ${points}`;
  //console.log(pEl);
  //divEl.append(pEl);
  question.setAttribute("style", "visibility: invisible");
  clearInterval(countdownInterval);
  userInitials();
  var p1El = document.createElement("p");
  divEl.append(p1El);
  console.log(localStorage.getItem("Initials"))
  p1El.textContent = localStorage.getItem("Initials");
  //pEl.setAttribute("style",  "visibility: visible")
}
function userInitials (){
  var initials = prompt("Game Over! Enter Your Initials")
  console.log(initials)
  var scores =
    {
      ObjInitials: initials,
      ObjScore: timeRemaining,
    };
  localStorage.setItem("scores", JSON.stringify(scores));
  JSON.parse(localStorage.getItem("scores"));
  console.log(scores);
}
/*
function scoreboard(){
  localStorage.getItem("Scores");



getItem in local Storage
add the new score to Array
stringify 
setItem to local Storage


get item from local Storage
parse item
display




//console.log(event.target)
*/