"use strict";
const backgroundMusic = document.getElementById("backgroundMusic");
const winnerDiv = document.querySelector(".winner");
const boxes = document.querySelectorAll(".box");
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentPlayer = "X";

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (!box.textContent) {
      box.textContent = currentPlayer;
      console.log(checkWin(currentPlayer));
      if (checkWin(currentPlayer)) {
        document.getElementsByClassName(
          "winnertext"
        ).textContent = `Player ${currentPlayer} wins!`;

        document.getElementsByClassName("winner")[0].style.display = "flex";
        backgroundMusic.src = "win-music.mp3"; // Change the source to your win music
        backgroundMusic.play();
        // console.log(`${currentPlayer} wins`);
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

function checkWin(player) {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (
      boxes[a].textContent === player &&
      boxes[b].textContent === player &&
      boxes[c].textContent === player
    ) {
      return true;
    }
  }
  return false;
}
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function () {
  document.querySelectorAll(".box").forEach((box) => {
    box.textContent = "";
  });
  document.querySelector(".winner").style.display = "none";
});
