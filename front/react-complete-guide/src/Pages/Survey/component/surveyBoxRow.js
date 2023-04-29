import "./surveyBoxRow.css";
import React from "react";
import SurveyButton from "./surveyButton";
import { useState } from "react";
import { useEffect } from "react";

function SurveyBoxRow(props) {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });
  return (
    <div
      className={
        innerWidth > 1000 ? "surveyBoxRowBorder" : "surveyBoxRowBorderSmall"
      }
    >
      {props.list.map((prob) => (
        <div className="surveyBoxRowWindow">
          <SurveyButton name={prob} />
        </div>
      ))}
    </div>
  );
}
export default SurveyBoxRow;
