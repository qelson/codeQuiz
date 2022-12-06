var secondsLeft = 90;
var questions = [
    {
        question:"Which member of the family shoots Tony Soprano in the abdomen with a revolver?",
        options:[
            "Chrissy","Uncle Jun","Paulie Walnuts","Artie Bucco"
        ],
        answer: "ans2"
    },
    {
        question:"Who is the first to get whacked in the Sopranos?",
        options:[
            "Pussy","Chrissy","Ade","Sil"
        ],
        answer: "ans1"
    },
    {
        question:"Who falls in love with Carmella in season four?",
        options:[
            "Bobby","Johnny Cakes","Furio","Phil"
        ],
        answer: "ans3"
    }
];
var index = 0;
var score = 0;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    document.getElementById("time").innerHTML = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);

    //game over function
    }

  }, 1000);
}


function gameOver(){
    alert("Game Over");

}


function checkAnswer()
{
    

    
    alert("Hello");
}

function displayQuestion()
{
    document.getElementById("questions-div").innerHTML = "";
    var p = document.createElement("p");
    p.innerHTML = questions[index].question;
    document.getElementById("questions-div").appendChild(p);
    for(var i=0;i<questions[index].options.length;i++)
    {
        var btn = document.createElement("button");
        btn.textContent = questions[index].options[i];
        btn.setAttribute("data-ans", questions[index].options[i]);
        document.getElementById("questions-div").appendChild(btn);
        btn.onclick = checkAnswer;
    }
}

document.getElementById("start").addEventListener("click", function(){
    setTime();
    document.getElementById("start-div").setAttribute("style","display:none");
    displayQuestion();
})