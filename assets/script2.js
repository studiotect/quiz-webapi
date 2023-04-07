var timeRemaining = 5;
var countdownEl = document.getElementById('countdown');
var countdownInterval;

document.getElementById("startBtn").addEventListener("click",function(){
  startBtn.setAttribute("style", "visibility: hidden");
  startTimer();
});

function startTimer(){
var countdownInterval = setInterval(updateCountdown, 1000);


function updateCountdown(){
  var seconds = timeRemaining;
  countdownEl.textContent= `Time: ${seconds}`;
  timeRemaining--;
  if( timeRemaining === -1 ){
    clearInterval(countdownInterval);
}
}
}