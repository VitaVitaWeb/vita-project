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
    console.log(surveyInfoTwo.cnt);
    if (isClicked === true) {
      setState(false);
      surveyInfoTwo.setCnt(surveyInfoTwo.cnt - 1);
      SurveyCheckName({
        name: props.name.dbName,
        surveyInfo: surveyInfo,
        surveyInfoTwo: surveyInfoTwo,
        check: false,
      });
    } else {
      if (surveyInfoTwo.cnt < 5) {
        setState(true);
        surveyInfoTwo.setCnt(surveyInfoTwo.cnt + 1);
        SurveyCheckName({
          name: props.name.dbName,
          surveyInfo: surveyInfo,
          surveyInfoTwo: surveyInfoTwo,
          check: true,
        });
      }
    }
  };
  return (
    <div>
      <button
        className={isClicked ? "surveyButtonClicked" : "surveyButton"}
        onClick={OnButtonClick}
      >
        {props.name.iconUrl && (
          <img src={props.name.iconUrl} alt={props.name.name} />
        )}
      </button>
      <div className="surveyButtonText">{props.name.name}</div>
    </div>
  );
}
export default SurveyButton;
