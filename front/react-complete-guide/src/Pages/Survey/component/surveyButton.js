import "./surveyButton.css";
import React, { useState } from "react";
function SurveyButton(props) {
  const [isClicked, setState] = useState(false);

  const OnButtonClick = () => {
    isClicked ? setState(false) : setState(true);
  };
  return (
    <div>
      <button
        className={isClicked ? "surveyButtonClicked" : "surveyButton"}
        onClick={OnButtonClick}
      ></button>
      <div className="surveyButtonText">{props.name}</div>
    </div>
  );
}
export default SurveyButton;
