import React from "react";

const AdviceTexts = ({ text }) => {
  const { slip } = text;
  return (
    <div className="advice-texts">
      <p>ADVICE #{slip && slip.id}</p>
      <h3>"{slip && slip.advice}"</h3>
      <div className="advice-decoration">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default AdviceTexts;
