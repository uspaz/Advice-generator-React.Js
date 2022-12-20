import React from "react";
import dicesImage from "../../public/images/icon-dice.svg";
const ButtonDices = ({ handleAdvice }) => {
  return (
    <div className="btn-dices" onClick={handleAdvice}>
      <img src={dicesImage} alt="dices" />
    </div>
  );
};

export default ButtonDices;
