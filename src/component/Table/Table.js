import React from "react";
import "./Table.css";

const Table = ({ winCount, clearHistory, playerOne, playerSec }) => {
  return (
    <div className="table">
      <span className="table__title">Score</span>
      <div className="player__info">
        <span className="player__name">{playerOne}:</span>
        <span className="player__score">{winCount.X}</span>
      </div>
      <div className="player__info">
        <span className="player__name">{playerSec}:</span>
        <span className="player__score">{winCount.O}</span>
      </div>
      <button className="fz-small btn" onClick={clearHistory}>
        Reset
      </button>
    </div>
  );
};

export default Table;
