import TopBar from "../../CommonComponents/TopBar/topBar";
import SurveyMain from "./component/surveyMain";
import SurveyBottom from "./component/surveyBottomBar";
import "./component/surveyBackground.css";
import { useNavigate } from "react-router-dom";

function SurveyPrefer() {
  const lists = [
    ["좋은 원료", "가성비", "단일 성분", "멀티 제품"],
    ["개별 포장", "고함량", "최적 함량", "해외 직구"],
    ["하루 한번"],
  ];
  const text = {
    title: "영양제를 선택할 때,\n어떤 것을 중요하게 생각하시나요?",
    content: "중복 선택이 가능합니다. (최대 3개)",
  };
  const movePage = useNavigate();
  function goNextPage() {
    movePage("/surveyPurpose");
  }
  function goPrevPage() {
    movePage("/surveyFormation");
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
export default SurveyPrefer;
