import TopBar from "../../CommonComponent/TopBar/topBar";
import SurveyMain from "./component/surveyMain";
import SurveyBottom from "./component/surveyBottomBar";
import "./component/surveyBackground.css";
import { useNavigate } from "react-router-dom";

function SurveyPurpose() {
  const lists = [
    ["스트레스 케어", "활력 증진", "눈 건조감 개선", "관절 및 연골건장"],
    ["항산화", "시력 및 눈 피로감 케어", "피부건강", "체지방 감소"],
    ["면역력 감소", "장 건강", "간 건강", "혈압 관리"],
    ["혈행 개선", "뼈 건강", "콜레스테롤 수치 개선", "혈중 중성지질 수치 개선"],
    ["혈당 개선"],
  ];
  const text = {
    title: "영양제를 먹는 이유가\n무엇인가요?",
    content: "중복 선택이 가능합니다. (최대 6개)",
  };
  const movePage = useNavigate();
  function goNextPage() {
    movePage("/mainPage");
  }
  function goPrevPage() {
    movePage("/surveyPrefer");
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
export default SurveyPurpose;
