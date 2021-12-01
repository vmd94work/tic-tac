import React from "react";
import "./Square.css";

const Square = ({ clickedArray, handleClick }) => {
  return (
    <div className="board">
      {clickedArray.map((item, idx) => {
        if (item === "") {
          return (
            <div className="square" key={idx} onClick={() => handleClick(idx)}>
              {item}
            </div>
          );
        } else {
          return <div className="square__active">{item}</div>;
        }
      })}
    </div>
  );
};

export default Square;
