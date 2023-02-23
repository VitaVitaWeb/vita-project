import TopBar from "../../CommonComponents/TopBar/topBar";
import SurveyMain from "./component/surveyMain";
import SurveyBottom from "./component/surveyBottomBar";
import "./component/surveyBackground.css";
import { useNavigate } from "react-router-dom";

function SurveyFormation() {
  const lists = [
    ["상관없음", "캡슐", "정", "가루"],
    ["액상", "츄어블", "젤리", "포"],
    ["환"],
  ];
  const text = {
    title: "어떤 제형을 선호하시나요?",
    content: "중복 선택이 가능합니다. (최대 5개)",
  };
  const movePage = useNavigate();
  function goNextPage() {
    movePage("/surveyPrefer");
  }
  function goPrevPage() {
    movePage("/mainPage");
  }
  return (
    <div>
      <div className="surveyBackgroundBorder">
        <SurveyMain lists={lists} text={text}></SurveyMain>
      </div>
      <SurveyBottom nextNav={goNextPage} prevNav={goPrevPage}></SurveyBottom>
      <TopBar></TopBar>
    </div>
  );
}
export default SurveyFormation;
