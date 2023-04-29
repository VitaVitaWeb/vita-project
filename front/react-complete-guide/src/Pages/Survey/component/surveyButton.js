import "./surveyButton.css";
import React, { useContext, useState } from "react";
import SurveyListApi from "../SurveyListApi";
function SurveyButton(props) {
  const [isClicked, setState] = useState(false);
  const surveyList = useContext(SurveyListApi);
  const nameConst = { name: props.name };

  const OnButtonClick = () => {
    if (isClicked === true) {
      setState(false);
      surveyList.addList(
        surveyList.surveyInfo.filter((name) => name.name != props.name)
      );
    } else {
      setState(true);
      surveyList.addList([nameConst, ...surveyList.surveyInfo]);
    }
    console.log(surveyList.surveyInfo);
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
