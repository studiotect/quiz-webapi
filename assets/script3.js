var currentScoreDivTag = document.querySelector(".current-score")  
var currentHighScore
var currentScore = 0
var playerName

function start(){
currentHighScore = localStorage.getItem("highScore");
playerName = localStorage.getItem("player");
}

function displayCurrentScore(){
  currentScoreDivTag.textContent = currentScore
}

function saveScore(){
  localStorage.setItem("LastSavedScore", currentScore)
}