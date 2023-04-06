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
var time = 60000;

document.getElementById("startBtn").addEventListener("click",function(){
  startBtn.setAttribute("style", "visibility: hidden");
  question.setAttribute("style", "visibility: visible");
  timer.setAttribute("style", "visibility: visible")

})
countdown()

function countdown(){
  var divEl = document.getElementById("timer");
  var pEl = document.createElement("p");
  divEl.textContent = "Time = ",0;
  pEl.textContent = time;
  console.log(time);
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
    console.log(i)
    btnEl.addEventListener("click",choiceClick);
    divEl.appendChild(btnEl);
  }
}

function choiceClick(event){
  if (questionBank[currentQuestion].answer==event.target.dataset.choice){
    points=points+50;
    console.log("correct")
    console.log(points)
  }
  else {
    time=time-5000;
    console.log("wrong")
    console.log(time)
  }

  currentQuestion++;
  if (currentQuestion >= questionBank.length) {
    var divEl = document.getElementById("scoreboard");
    var pEl = document.createElement("p");
    pEl.textContent = `Score: ${points}`;
    console.log(pEl)
    divEl.append(pEl)
    question.setAttribute("style", "visibility: invisible");
    pEl.setAttribute("style",  "visibility: visible")
    return
  }
  
  displayQuestion();
}


displayQuestion()
//console.log(event.target)