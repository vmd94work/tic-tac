import React from "react";
import "./Startpopup.css";

const Startpopup = ({
  gameStart,
  setPlayerOne,
  setPlayerSec,
  playerOne,
  playerSec,
}) => {
  return (
    <div className="popup__background">
      <div className="start__popup">
        <h1 className="popup__title mb">Hello in TicTacToe</h1>
        <form className="players__names">
          <input
            type="text"
            value={playerOne}
            placeholder="Player X"
            className="input__popup mb"
            onChange={(e) => setPlayerOne(e.target.value)}
          />
          <input
            type="text"
            value={playerSec}
            placeholder="Player Y"
            className="input__popup mb"
            onChange={(e) => setPlayerSec(e.target.value)}
          />
          <button type="button" className="submit mb" onClick={gameStart}>
            Start Game
          </button>
        </form>
      </div>
    </div>
  );
};

export default Startpopup;
