import "./surveyMain.css";
import SurveyBoxRow from "./surveyBoxRow";
import React, { useState } from "react";
function SurveyMain(props) {
  const [surveyListState, setSurveyListState] = useState({
    surveyList: [
      { isChecked: false, listTag: "cap" },
      { isChecked: false, listTag: "pill" },
      { isChecked: false, listTag: "pow" },
      { isChecked: false, listTag: "liq" },
      { isChecked: false, listTag: "chew" },
      { isChecked: false, listTag: "jell" },
      { isChecked: false, listTag: "pho" },
      { isChecked: false, listTag: "ball" },
    ],
  });
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
