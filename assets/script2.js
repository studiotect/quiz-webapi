var initials;
var timeRemaining = 20;
var scoresNew;
var scores = 
{
  ObjInitials: "ted",
  ObjScore: 6
};

localStorage.setItem("scores", JSON.stringify(scores));

userInitials();

function userInitials (){
  initials = prompt("Game Over! Enter Your Initials")
  console.log(initials)
}
addScoreToLocalStorage();
function addScoreToLocalStorage(){
  var scores = localStorage.getItem("scores");
  var scoresNew =
    {
      ObjInitials: initials,
      ObjScore: timeRemaining
    };
  JSON.stringify(scoresNew);
  var scores = scores.concat(scoresNew);
  localStorage.setItem("scores", JSON.stringify(scores));


}

parseLocalStorage();
function parseLocalStorage(){
  var scores = JSON.parse(localStorage.getItem("scores"));
  console.log(scores);
}