var initials;
var timeRemaining = 20;
var scoresNew;
var scores =[
{
  objInitials: "ted",
  objScore: 6
}
];

localStorage.setItem("scores", JSON.stringify(scores));

userInitials();

function userInitials (){
  initials = prompt("Game Over! Enter Your Initials")
  console.log(initials)
}
addScoreToLocalStorage();
function addScoreToLocalStorage(){
  var scores = localStorage.getItem("scores");
  scores = JSON.parse(scores);
  var scoresNew =
    {
      objInitials: initials,
      objScore: timeRemaining
    };
  console.log(scores)
  console.log(scoresNew)
  scores = scores.push(scoresNew);
  localStorage.setItem("scores", JSON.stringify(scores));


}

parseLocalStorage();
function parseLocalStorage(){
  var scores = JSON.parse(localStorage.getItem("scores"));
  console.log(scores);
}