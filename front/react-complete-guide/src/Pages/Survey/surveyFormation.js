import TopBar from "../../CommonComponent/TopBar/topBar";
import SurveyMain from "./component/surveyMain";
import SurveyBottomBar from "./component/surveyBottomBar";
import "./component/surveyBackground.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function SurveyFormation() {
  const lists = [
    ["상관없음", "캡슐", "정", "가루"],
    ["액상", "츄어블", "젤리", "포"],
    ["환"],
  ];
  const shortLists = [
    ["상관없음", "캡슐", "정"],
    ["가루", "액상", "츄어블"],
    ["환", "젤리", "포"],
  ];
  const text = {
    title: "어떤 제형을 선호하시나요?",
    content: "중복 선택이 가능합니다. (최대 5개)",
  };
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });
  const movePage = useNavigate();
  function goNextPage() {
    movePage("/surveyPurpose");
  }
  function goPrevPage() {
    movePage("/mainPage");
  }
  return (
    <div>
      <div className="surveyBackgroundBorder">
        <SurveyMain
          lists={innerWidth > 1000 ? lists : shortLists}
          text={text}
        ></SurveyMain>
      </div>
      <SurveyBottomBar
        nextNav={goNextPage}
        prevNav={goPrevPage}
      ></SurveyBottomBar>
      <TopBar></TopBar>
    </div>
  );
}
export default SurveyFormation;
