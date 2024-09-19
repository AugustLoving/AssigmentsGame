// Variables
let result = document.getElementById("result");


// Buttons
let button0 = document.getElementById("button0");


// Texts
let playerRollText = document.getElementById("playerRollText");
let computerRollText = document.getElementById("computerRollText");
let playerScoreText = document.getElementById("playerScoreText");
let computerScoreText = document.getElementById("computerScoreText");
let drawScoreText = document.getElementById("drawScoreText");


// Data
let playerRoll = 0;
let computerRoll = 0;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;


// Processes
button0.addEventListener("click", function() {
 getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForComputer();
  showEvaluation();
  showScores();
});


// Controllers
function getRandomNumberOneToSixForPlayer(){
  playerRoll =  Math.floor(Math.random()*6) + 1;
  showPlayerRollResult();
}
function getRandomNumberOneToSixForComputer(){
  computerRoll =  Math.floor(Math.random()*6) + 1;
  showComputerRollResult();
}

function evaluate(num1, num2){
  if (num1 > num2) {
    playerScore++;
    return "YOU WIN😁😁😁!"
  }
  else if (num1 < num2) {
    computerScore++;
      return "YOU LOSE😢😢😢!"
    }
  else{
    drawScore++
    return "DRAW!"
  }
}



// Views
function showPlayerRollResult(){
playerRollText.innerHTML = "Player rolled: " + playerRoll;
}
function showComputerRollResult(){
  computerRollText.innerHTML = "Computer rolled: " + computerRoll;
}
function showEvaluation(){
  resultText = evaluate(playerRoll, computerRoll);
  result.innerHTML = resultText;
}

function showScores(){
  playerScoreText.innerHTML = "Player score: " + playerScore;
  computerScoreText.innerHTML = "Computer score: " + computerScore;
  drawScoreText.innerHTML = "Draw score: " + drawScore;
}

