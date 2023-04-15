import "./topBar.css";
import { useNavigate } from "react-router-dom";
function TopBar() {
  const movePage = useNavigate();
  function goMain() {
    movePage("/mainPage");
  }
  function goSurvey() {
    movePage("/surveyFormation");
  }
  function goCompare() {
    movePage("/ComparePage");
  }
  function goLogin() {
    movePage("/loginPage");
  }
  return (
    <div className="topBar">
      <div className="topMain">
        <button onClick={goMain} className="mainPageButton">
          VitaWeb
        </button>
        <div className="mainPageSearchBorder">
          <input className="mainPageSearch"></input>
        </div>
        <button onClick={goSurvey} className="mainCompareButton">
          분석하기
        </button>
        <button onClick={goCompare} className="mainCompareButton">
          비교하기
        </button>
        <button className="mainCompareButton">계산하기</button>
        <button onClick={goLogin} className="mainLoginButton">
          로그인
        </button>
      </div>
    </div>
  );
}
export default TopBar;
