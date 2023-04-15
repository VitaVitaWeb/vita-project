import "./surveyBoxRow.css";
import React from "react";
import SurveyButton from "./surveyButton";

function SurveyBoxRow(props) {
  return (
    <div className="surveyBoxRowBorder">
      {props.list.map((prob) => (
        <div className="surveyBoxRowWindow">
          <SurveyButton name={prob} />
        </div>
      ))}
    </div>
  );
}
export default SurveyBoxRow;
