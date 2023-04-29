import "./surveyMain.css";
import SurveyBoxRow from "./surveyBoxRow";
import React, { useState } from "react";
function SurveyMain(props) {
  return (
    <div className="surveyMainBorder">
      <div>
        <p className="surveyMainTextTitle">{props.text.title}</p>
        <p className="surveyMainText">{props.text.content}</p>
      </div>
      <div className="surveyMainButtonArea">
        {props.lists.map((prob) => (
          <SurveyBoxRow list={prob} />
        ))}
      </div>
    </div>
  );
}
export default SurveyMain;
