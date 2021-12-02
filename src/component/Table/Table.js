import React from "react";
import "./Table.css";

const Table = ({ winCount }) => {
  return (
    <div className="table">
      <span className="table__title">Score</span>
      <div className="player__info">
        <span className="player__name">Player X:</span>
        <span className="player__score">{winCount.X}</span>
      </div>
      <div className="player__info">
        <span className="player__name">Player O:</span>
        <span className="player__score">{winCount.O}</span>
      </div>
    </div>
  );
};

export default Table;
