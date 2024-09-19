// Variables



// Buttons
let button0 = document.getElementById("button0");


// Texts
let playerRollText = document.getElementById("playerRollText");


// Data
let playerRoll = 0;


// Processes
button0.addEventListener("click", function() {
 getRandomNumberOneToSixForPlayer();

});


// Controllers
function getRandomNumberOneToSixForPlayer(){
  playerRoll =  Math.floor(Math.random()*6) + 1;
  showPlayerRollResult();
}


// Views
function showPlayerRollResult(){
playerRollText.innerHTML = playerRoll;
}

