//your JS code here. If required.
// script.js
const player1 = document.getElementById("player-1").value;
const player2 = document.getElementById("player-2").value;
const message = document.querySelector(".message");
const cells = document.querySelectorAll(".cell");

let currentPlayer = player1;
let board = ["", "", "", "", "", "", "", "", ""]; // Represents the board state

function checkWin() {
    // Implement win-checking logic (rows, columns, diagonals)
    // Update message and show winner if applicable
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index] === "") {
            cell.textContent = currentPlayer === player1 ? "X" : "O";
            board[index] = cell.textContent;
            checkWin();
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            message.textContent = `${currentPlayer}, you're up!`;
        }
    });
});

document.getElementById("submit").addEventListener("click", () => {
    // Initialize the game (e.g., hide input fields, show board)
    message.textContent = `${player1}, you're up!`;
});
