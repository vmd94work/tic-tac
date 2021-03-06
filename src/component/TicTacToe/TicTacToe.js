import React, { useState } from "react";
import Square from "../Square/Square";
import Tic from "../Tic/Tic";
import Tac from "../Tac/Tac";
import "./TicTacToe.css";
import Table from "../Table/Table";
import Winpopup from "../WinPopUp/Winpopup";
import Startpopup from "../Startpopup/Startpopup";

const EMPTY = "";
const X_PLAYER = <Tac />;
const O_PLAYER = <Tic />;
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Tictactoe = () => {
  const [startGame, setstartGame] = useState(false);
  const [playerOne, setPlayerOne] = useState("X player");
  const [playerSec, setPlayerSec] = useState("O player");
  const [grid, setGrid] = useState(Array(9).fill(EMPTY));
  const [player, setPlayer] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winCount, setwinCount] = useState({ X: 0, O: 0 });

  function gameStart() {
    setstartGame(true);
  }

  function gameOver() {
    if (!gameFinished) {
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === X_PLAYER &&
          grid[winCombination[i][1]] === X_PLAYER &&
          grid[winCombination[i][2]] === X_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, X: winCount.X + 1 });
          console.log("X win");
          return;
        }
      }
      for (let i = 0; i < 8; i++) {
        if (
          grid[winCombination[i][0]] === O_PLAYER &&
          grid[winCombination[i][1]] === O_PLAYER &&
          grid[winCombination[i][2]] === O_PLAYER
        ) {
          setGameFinished(true);
          setwinCount({ ...winCount, O: winCount.O + 1 });
          console.log("O win");
          return;
        }
      }
      if (!grid.includes(EMPTY)) {
        setGameFinished(true);
        setDraw(true);
        console.log("Draw");
      }
    }
  }
  gameOver();

  function restartGame() {
    setGrid(Array(9).fill(EMPTY));
    setGameFinished(false);
    setPlayer(false);
    setDraw(false);
  }

  function clearHistory() {
    setwinCount({ X: 0, O: 0 });
    restartGame();
    setstartGame(false);
  }

  function handleClick(id) {
    setGrid(
      grid.map((item, idx) => {
        if (idx === id) {
          if (!player) {
            return X_PLAYER;
          } else {
            return O_PLAYER;
          }
        } else {
          return item;
        }
      })
    );
    setPlayer(!player);
  }

  return (
    <div className="tic-tac-toe">
      <Square clickedArray={grid} handleClick={handleClick} />
      <Table
        winCount={winCount}
        clearHistory={clearHistory}
        playerOne={playerOne}
        playerSec={playerSec}
      />
      {!startGame && (
        <Startpopup
          gameStart={gameStart}
          setPlayerOne={setPlayerOne}
          setPlayerSec={setPlayerSec}
          playerOne={playerOne}
          playerSec={playerSec}
        />
      )}
      {gameFinished && (
        <Winpopup
          restartGame={restartGame}
          draw={draw}
          player={player}
          clearHistory={clearHistory}
        />
      )}
    </div>
  );
};

export default Tictactoe;
