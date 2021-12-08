import React from "react";
import "./WinPopUp.css";

const Winpopup = ({ restartGame, draw, player, clearHistory }) => {
  return (
    <div className="popup__background">
      <div className="win__popup">
        <h2 className="winner">
          {draw && <span>This is DRAWWWW!!</span>}
          {!draw && <span>{player ? "X WIN" : "O WIN"}</span>}
        </h2>
        <button className="btn" onClick={restartGame}>
          Restart Game
        </button>
        <button className="btn" onClick={clearHistory}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Winpopup;
