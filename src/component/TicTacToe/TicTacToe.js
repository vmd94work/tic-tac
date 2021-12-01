import React, { useState } from "react";
import Square from "../Square/Square";
import Tic from "../Tic/Tic";
import Tac from "../Tac/Tac";
import "./TicTacToe.css";

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
  const [grid, setGrid] = useState(Array(9).fill(EMPTY));
  const [player, setPlayer] = useState(false);

  function handleClick(id) {
    setGrid(
      grid.map((item, idx) => {
        if (idx === id) {
          if (player) {
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
    </div>
  );
};

export default Tictactoe;
