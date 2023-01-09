let board,
  turn = 0,
  winner;

let playerSide = {
  player1: "X",
  player2: "0",
};

const winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("button");

const endMsg = document.getElementById("msg");

boxes.forEach(function (box) {
  box.addEventListener("click", handleMove);
});

reset.addEventListener("click", startingBoard);

function startingBoard() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 0;
  winner = null;
  endMsg.innerHTML = null;
  boxes.forEach(function (box) {
    box.querySelector("div").innerHTML = "";
  });
}
startingBoard();

function findWinner() {
  for (let i = 0; i < winCombo.length; i++) {
    if (
      board[winCombo[i][0]] === playerSide.player1 &&
      board[winCombo[i][1]] === playerSide.player1 &&
      board[winCombo[i][2]] === playerSide.player1 &&
      board[winCombo[i][3]] === playerSide.player1 &&
      board[winCombo[i][4]] === playerSide.player1 &&
      board[winCombo[i][5]] === playerSide.player1 &&
      board[winCombo[i][6]] === playerSide.player1 &&
      board[winCombo[i][7]] === playerSide.player1
    ) {
      endMsg.innerHTML = "Congratulations! Player 1 won the game!";
      return playerSide.player1;
    } else if (
      board[winCombo[i][0]] === playerSide.player2 &&
      board[winCombo[i][1]] === playerSide.player2 &&
      board[winCombo[i][2]] === playerSide.player2 &&
      board[winCombo[i][3]] === playerSide.player2 &&
      board[winCombo[i][4]] === playerSide.player2 &&
      board[winCombo[i][5]] === playerSide.player2 &&
      board[winCombo[i][6]] === playerSide.player2 &&
      board[winCombo[i][7]] === playerSide.player2
    ) {
      endMsg.innerHTML = "Congratulations! Player 2 won the game!";
      return playerSide.player2;
    } else if (checkTie()) {
      endMsg.innerHTML = "Darn, it's a tie!!!";
      return playerSide.tie;
    }
  }
}

function checkTie() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return false;
    }
  }
  return true;
}

function handleMove(e) {
  value = parseInt(this.dataset.value);
  if (board[value]) return;
  if (winner) return;

  if (turn % 2 == 0) {
    board[value] = playerSide.player1;
    e.target.querySelector("div").innerHTML = playerSide.player1;
  } else {
    board[value] = playerSide.player2;
    e.target.querySelector("div").innerHTML = playerSide.player2;
  }
  turn += 1;

  winner = findWinner();
}
