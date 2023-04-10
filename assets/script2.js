var initials;
var timeRemaining = 20;
var scoresNew;
var scores = JSON.parse(localStorage.getItem('scores')) || [];

userInitials();

function userInitials (){
  initials = prompt("Game Over! Enter Your Initials")
  console.log(initials)
}
addScoreToLocalStorage();
function addScoreToLocalStorage(){
  scores.push({
    objInitials: initials,
    objScore: timeRemaining
  })
localStorage.setItem("scores", JSON.stringify(scores))
}
