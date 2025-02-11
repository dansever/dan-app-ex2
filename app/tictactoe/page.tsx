"use client"; // Add this line at the very top
import { useState } from "react";
import styles from "./page.module.css";

export default function Tictactoe() {
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true); // X starts first

  // Function to handle a move
  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return; // If cell is already filled or game is over, do nothing
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const calculateWinner = (board: Array<string>): string | { winner: string; line: number[] } | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line: [a, b, c] }; // Return winner and the winning line
      }
    }
    if (board.every((cell) => cell !== "")) { return "Tie";}
    return null;
  };
  

  const resetGame = () => {
    setBoard(new Array(9).fill("")); // Reset the board to empty
    setIsXNext(true); // Set X to play first
  };

  const winnerData = calculateWinner(board);
  let winner: string | null = null;
  let winningLine: number[] = [];

  if (typeof winnerData === "object" && winnerData !== null) {
    winner = winnerData.winner;
    winningLine = winnerData.line;
  } else if (winnerData === "Tie") {
    winner = "Tie";
  }

  const status = winner
    ? winner === "Tie"
      ? "It's a Tie..."
      : `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;
  const isGameOver = winner !== null;

  return (
    <div className={styles.game}>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        {board.map((value, index) => (
          <button
            key={index}
            className={`${styles.cell} ${isGameOver ? styles.disabled : ""} ${winningLine.includes(index) ? styles.winnerCell : ""}`}
            onClick={() => handleClick(index)}
            disabled={isGameOver} // Disable clicking when game is over
          >
            {value}
          </button>
        ))}
      </div>
      {(winner === "Tie" || winner) && (
        <button className={styles.resetButton} onClick={resetGame}>
          Reset Game
        </button>
      )}
    </div>
  );
}