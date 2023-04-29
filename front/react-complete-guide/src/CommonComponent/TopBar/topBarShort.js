import "./component/topBarShort.css";
import { useNavigate } from "react-router-dom";
function TopBarShort() {
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
    <div className="topBarShort">
      <div className="topMainShort">
        <button onClick={goMain} className="mainPageButton">
          VitaWeb
        </button>
        <button onClick={goSurvey} className="mainCompareButtonShort">
          분석하기
        </button>
        <button onClick={goCompare} className="mainCompareButtonShort">
          비교하기
        </button>
        <button className="mainCompareButtonShort">계산하기</button>
        <button onClick={goLogin} className="mainLoginButtonShort">
          로그인
        </button>
      </div>
      <div className="topMainShortSec">
        <div className="mainPageSearchBorderShort">
          <input className="mainPageSearchShort"></input>
        </div>
      </div>
    </div>
  );
}
export default TopBarShort;
