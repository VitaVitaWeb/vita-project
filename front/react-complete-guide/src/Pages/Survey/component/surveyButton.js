import "./surveyButton.css";
import React, { useContext, useState, useEffect } from "react";
import SurveyFormationApi from "../surveyFormationApi";
import SurveyPurposeApi from "../surveyPurposeApi";
import SurveyCheckName from "./surveyCheckName";
function SurveyButton(props) {
  const [isClicked, setState] = useState(false);
  const surveyInfo = useContext(SurveyFormationApi);
  const surveyInfoTwo = useContext(SurveyPurposeApi);

  const OnButtonClick = () => {
    if (isClicked === true) {
      setState(false);
      SurveyCheckName({
        name: props.name.dbName,
        surveyInfo: surveyInfo,
        surveyInfoTwo: surveyInfoTwo,
        check: false,
      });
    } else {
      setState(true);
      SurveyCheckName({
        name: props.name.dbName,
        surveyInfo: surveyInfo,
        surveyInfoTwo: surveyInfoTwo,
        check: true,
      });
    }
  };
  return (
    <div>
      <button
        className={isClicked ? "surveyButtonClicked" : "surveyButton"}
        onClick={OnButtonClick}
      ></button>
      <div className="surveyButtonText">{props.name.name}</div>
    </div>
  );
}
export default SurveyButton;
