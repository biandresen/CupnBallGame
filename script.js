//VARIABLES
const cup1 = document.getElementById("cup1");
const cup2 = document.getElementById("cup2");
const cup3 = document.getElementById("cup3");
const ball = document.getElementById("ball");
let cupDiv = document.getElementById("cupDiv");
let buttonDiv = document.getElementById("buttonDiv");
let button = document.createElement("button");
let removeClick = false;
button.classList.add("playButton");
button.textContent = "Play again";
const positions = [305, 570, 840];
let message = document.getElementById("message");
let pointsDisplay = document.getElementById("pointsDisplay");
let triesDisplay = document.getElementById("triesDisplay");
let points = 0;
let tries = 0;
let playAgain;

//EVENT LISTENERS
button.addEventListener("click", () => newGame());
cup1.addEventListener("click", () => checkBall(1));
cup2.addEventListener("click", () => checkBall(2));
cup3.addEventListener("click", () => checkBall(3));

window.onload = function () {
  newGame();
};

function newGame() {
  if (playAgain) buttonDiv.removeChild(button);
  cupDiv.style.display = "";
  pointsDisplay.textContent = "Points: " + points.toString();
  triesDisplay.textContent = "Tries: " + tries.toString();
  message.textContent = "Pick a cup";
  setBallPosition();
}

function setBallPosition() {
  cup1.classList.remove("openCup"); //Reset the float up cup
  cup2.classList.remove("openCup");
  cup3.classList.remove("openCup");
  let position = Math.floor(Math.random() * 3);
  ball.style.position = "absolute";
  ball.style.left = positions[position] + "px";
  ball.style.top = 500 + "px";
}

function checkBall(chosenCup) {
  message.classList.remove("greenText", "redText");
  tries++;
  if (chosenCup === 1) cup1.classList.add("openCup"); //Make the cup float up
  if (chosenCup === 2) cup2.classList.add("openCup");
  if (chosenCup === 3) cup3.classList.add("openCup");
  if (chosenCup === 1 && ball.style.left === positions[0] + "px") {
    points++;
    message.classList.add("greenText");
    message.textContent = "POINT!";
  } else if (chosenCup === 2 && ball.style.left === positions[1] + "px") {
    points++;
    message.classList.add("greenText");
    message.textContent = "POINT!";
  } else if (chosenCup === 3 && ball.style.left === positions[2] + "px") {
    points++;
    message.classList.add("greenText");
    message.textContent = "POINT!";
  } else {
    message.classList.add("redText");
    message.textContent = "TRY AGAIN!";
  }
  pointsDisplay.textContent = "Points: " + points.toString();
  triesDisplay.textContent = "Tries: " + tries.toString();
  if (tries === 10) gameOver();
  else {
    setTimeout(function () {
      setBallPosition();
    }, 900);
  }
}

function gameOver() {
  playAgain = true;
  points = 0;
  tries = 0;
  cup1.classList.remove("openCup"); //Reset the float up cup
  cup2.classList.remove("openCup");
  cup3.classList.remove("openCup");
  message.classList.remove("greenText", "redText");
  message.textContent = "GAME OVER";
  cupDiv.style.display = "none";
  buttonDiv.appendChild(button);
}
