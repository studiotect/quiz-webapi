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
//var points = 0;
var timeRemaining = 15;
var countdownEl = document.getElementById('countdown');
var scoreboardEl = document.getElementById('scoreboard');
var countdownInterval;
var initials;
//var highscore = ""
var scoreArray = []
var scoresNew;
var scores = JSON.parse(localStorage.getItem('scores')) || [];

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
    //points=points+50;
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
  clearInterval(countdownInterval);
  question.setAttribute("style", "visibility: hidden");
  countdownEl.setAttribute("style", "visibility: hidden");
  var divEl = document.getElementById("scoreboard");
  userInitials();
}

function userInitials (){
  initials = prompt("Game Over! Enter Your Initials")
  console.log(initials)
  addScoreToLocalStorage();
}
function addScoreToLocalStorage(){
  scores.push({
    objInitials: initials,
    objScore: timeRemaining
  })
  localStorage.setItem("scores", JSON.stringify(scores))
  scoreboard();
}

function scoreboard(){
  let i = 0;
  while (i < scores.length) {
    var displayInitials = (scores[i].objInitials);
    var displayScores = (scores[i].objScore);i++;
    var divEl = document.getElementById("scoreboard");
    var pEl = document.createElement("p");
    var leaderboard = JSON.parse(localStorage.getItem('scores'));
    pEl.textContent = leaderboard[i].objInitials + " " + leaderboard[i].objScore;
    divEl.append(pEl);
    console.log(displayInitials);
    console.log(displayScores);
  }
  scoreboardEl.setAttribute("style", "visibility: visible");
  console.log(pEl)
  console.log(pEl.textContent)
  console.log(divEl)
  //var p1El = document.createElement("p");
  //console.log(localStorage.getItem("Initials"))
  //p1El.textContent = localStorage.getItem("Initials");
}