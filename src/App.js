import React from "react";
import "./App.css";
import Square from "./component/Square/Square";
/* import Tac from './component/Tac/Tac.js'
import Tic from './component/Tic/Tic.js' */

function App() {

/* const handleClick = () =>{ 
  alert ('click')
} */

  return (
    <div className="wrapper">
      <div className="game">
        <div className="board">
          <div className="board__grid">
            <div className = 'grid__block'>
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
          </div>
          <div className="board__items">
            <Square num={0} />
            <Square num={1} />
            <Square num={2} />
            <Square num={3} />
            <Square num={4} />
            <Square num={5} />
            <Square num={6} />
            <Square num={7} />
            <Square num={8} />
          </div>
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
