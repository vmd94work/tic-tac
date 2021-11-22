import React from "react";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <div className="game">
        <div className="board">
          <div className="board__grid">
            <div className="vertical">
              <div className="vl"></div>
              <div className="vl"></div>
              <div className="vl"></div>
            </div>
            <div className="horizontal">
              <div className="hz"></div>
              <div className="hz"></div>
              <div className="hz"></div>
            </div>
          </div>
          <ul className="board__items">
            <li className="board__item">1</li>
            <li className="board__item">2</li>
            <li className="board__item">3</li>
            <li className="board__item">4</li>
            <li className="board__item">5</li>
            <li className="board__item">6</li>
            <li className="board__item">7</li>
            <li className="board__item">8</li>
            <li className="board__item">9</li>
          </ul>
        </div>
        <div className="players__block">
          <h1 className="players__title">Score</h1>
          <div className="players">
            <div className="player">
              <h2 className="player__title">Player 1:</h2>
              <span className="player__score">0</span>
            </div>
            <div className="player">
              <h2 className="player__title">Player 2:</h2>
              <span className="player__score">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
