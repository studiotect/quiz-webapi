var questionBank = [
  {
    text: "Which of the following is the state flower of Minnesota?",
    choices: ["showy pink lady slipper", "yellow dandelion", "ered rose", "sunflower"],
    answer: 0
  },
  {
    text: "What was the original name of St. Paul?",
    choices: ["Pig's Eye landing", "Mendota", "St. Francis", "St. Anthony"],
    answer: 0
  },
  {
    text: "Which famous cereal was created in Minnesota?",
    choices: ["Frosted Flakes", "Fruit Loops", "Wheaties"],
    answer: 2
  },
  {
    text: "What Minnesota company invented Post-it Notes?",
    choices: ["Medtronic", "Deluxe Corporation", "Patterson Company", "3M"],
    answer: 3
  },
  {
    text: "On what Minnesota lake was water skiing invented in 1922?",
    choices: ["Lake Minnetonka", "Mille Lacs Lake", "Lake Pepin", "Lake Superior"],
    answer: 2
  },
  {
    text: "What is the population of the smallest town (Funkley) in Minnesota?",
    choices: ["105", "68", "5", "537","94"],
    answer: 2
  },
  {
    text: "What is the state fish of Minnesota?",
    choices: ["Sunfish", "Walleye", "Northern Pike"],
    answer: 1
  },
  {
    text: "Which NFL team has the most division championships in the NFC North?",
    choices: ["Greenbay Packers", "Chicago Bears", "Minnesota Vikings", "Detroit Lions"],
    answer: 2
  },
  {
    text: "How many inches of snow fell during the Halloween Blizzard of 1991?",
    choices: ["28", "30", "33", "39"],
    answer: 0
  },
  {
    text: "What Minnesota town did Bob Dylan grow up?",
    choices: ["Hibbing", "Duluth", "Minneapolis", "Minnetonka"],
    answer: 0
  },
];
var currentQuestion = 0;
var timeRemaining = 90;
var countdownEl = document.getElementById('countdown');
var scoreboardEl = document.getElementById('scoreboard');
var countdownInterval;
var initials;
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
  }
  else {
    timeRemaining=timeRemaining-5;
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
  userInitials();
}

function userInitials (){
  initials = prompt("Game Over! Enter Your Initials")
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
  while (i < scores.length-1) {
    i++;
    var divEl = document.getElementById("scoreboard");
    var pEl = document.createElement("p");
    var leaderboard = JSON.parse(localStorage.getItem('scores'));
    console.log(leaderboard)
    pEl.textContent = leaderboard[i].objInitials + " " + leaderboard[i].objScore + "seconds";
    divEl.append(pEl);
  }
  scoreboardEl.setAttribute("style", "visibility: visible");
}