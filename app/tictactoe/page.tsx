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

   // Function to calculate the winner
   const calculateWinner = (board: Array<string | null>): string | null => {
    const lines = [
      [0, 1, 2],[3, 4, 5],[6, 7, 8],
      [0, 3, 6],[1, 4, 7],[2, 5, 8],
      [0, 4, 8],[2, 4, 6]];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] &&
         board[a] === board[b] &&
         board[a] === board[c]) {
        return board[a];
      }
    }
    return null; // No winner
  };

  const resetGame = () => {
    setBoard(new Array(9).fill("")); // Reset the board to empty
    setIsXNext(true); // Set X to play first
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`;
  const isGameOver = winner !== null;


  return (
    <div className={styles.game}>
      <div className={styles.status}>{status}</div>
      <div className={styles.board}>
        {board.map((value, index) => (
          <button
            key={index}
            className={`${styles.cell} ${isGameOver ? styles.disabled : ""}`}
            onClick={() => handleClick(index)}
            disabled={isGameOver} // Disable clicking when game is over
          >
            {value}
          </button>
        ))}
      </div>
      {winner && (
        <button className={styles.resetButton} onClick={resetGame}>
          Reset Game
        </button>
      )}
    </div>
  );
}