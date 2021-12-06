import React from "react";
import "./Square.css";

const Square = ({ clickedArray, handleClick }) => {
  return (
    <div>
      <div className="board__grid">
        <div className="grid__block">
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
      <div className="board">
        {clickedArray.map((item, idx) => {
          if (item === "") {
            return (
              <div
                className="square"
                key={idx}
                onClick={() => handleClick(idx)}
              >
                {item}
              </div>
            );
          } else {
            return (
              <div key={idx} className="square__active">
                {item}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Square;
