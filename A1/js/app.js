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
let playerHistoryText = document.getElementById("playerHistory");
let computerHistoryText = document.getElementById("computerHistory");


// Data
let playerRoll = 0;
let computerRoll = 0;
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;


// Arrays
let playerScoreHistory = [];
let computerScoreHistory = [];


// Processes
button0.addEventListener("click", function() {
 getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForComputer();
  showEvaluation();
  showScores();
  changePlayerScoreColorWinning()
  showHistory()
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
    playerScoreHistory.push(1);
    computerScoreHistory.push(0);
    return "RESULT: YOU WIN😁😁😁!"
  }
  else if (num1 < num2) {
    computerScore++;
    playerScoreHistory.push(0);
    computerScoreHistory.push(1);
      return " RESULT: YOU LOSE😢😢😢!"
    }
  else{
    drawScore++
    playerScoreHistory.push(0);
    computerScoreHistory.push(0);
    return " RESULT: DRAW!"
  }
}

// Color green if player is leading in score
function changePlayerScoreColorWinning() {
  if (playerScore > computerScore) {
    playerScoreText.style.color = "green";
  }
  else {
    playerScoreText.style.color = "black";
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

function showHistory(){
  playerHistoryText.innerHTML = "Player History: " + playerScoreHistory;
  computerHistoryText.innerHTML = " Computer History: " + computerScoreHistory;
}
