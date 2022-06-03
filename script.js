//we store game status here
const statusDisplay = document.getElementById("game-status");

//Here we store our elements for events
const cellElements = document.querySelectorAll(".cell");
const restartBtn = document.getElementById("restart-btn");

//Here we declare variables to track the game state
//We will use gameActive to pause the game in case of the win situation

let gameActive = true;

//We declare current player to know who's turn it is
let currentPlayer = "X";

//This will alows us to track which cells are played
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningConditions = [
  //horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //diagonal
  [0, 4, 8],
  [2, 4, 6],
];

//Here we declare some messaegs that we will display during the game for player
const currentPlayerTurn = () => `It's ${currentPlayer}'s Turn`;
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;

statusDisplay.innerHTML = currentPlayerTurn();

/*Anara's code*/

//We created a function that check if cell is empty or not
//if not empty it will not return anything
//if empty it will display the current player on clicked cell,will display the current players's turn text into displayStatus, and change the current player
const handleClick = function (e, index) {
  if (gameState[index] !== "" || !gameActive) {
    return;
  }
  gameState[index] = currentPlayer;
  const clickedCell = e.currentTarget;
  clickedCell.innerText = currentPlayer;
  if (currentPlayer === "X") {
    clickedCell.style.backgroundColor = "#d86c23";
  }
  checkResultValidation();
};






