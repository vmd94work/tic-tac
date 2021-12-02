import React from "react";
import "./WinPopUp.css";

const Winpopup = () => {
  return (
    <div className="popup__background">
      <div className="win__popup">
        <h2 className="winner">Winner</h2>
        <button className="btn">Restart Game</button>
        <button className="btn">Clear Points</button>
      </div>
    </div>
  );
};

export default Winpopup;
