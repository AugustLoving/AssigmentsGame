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


loadGame();
showScores();
// Processes
button0.addEventListener("click", function() {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForComputer();
  showEvaluation();
  showScores();
  changePlayerScoreColorWinning()
  showHistory()
  saveGame()
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

// cookies
function saveGame(){
  document.cookie = "playerScore=" + playerScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
  document.cookie = "computerScore=" + computerScore + ";expires=Thu, 18 Dec 2025 12:00:00 UTC";
}

function loadGame(){
  playerScore = getCookie("playerScore");
  computerScore = getCookie("computerScore");
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
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
  playerHistoryText.innerHTML = "Player History: " + playerScoreHistory.join(", ");
  computerHistoryText.innerHTML = " Computer History: " + computerScoreHistory.join(", ");
}
