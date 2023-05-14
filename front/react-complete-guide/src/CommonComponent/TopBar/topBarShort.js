import "./component/topBarShort.css";
import { useNavigate } from "react-router-dom";
function TopBarShort(props) {
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
  function goMyPage() {
    movePage("/myPage");
  }
  return (
    <div className="topBarShort">
      <div className="topMainShort">
        <button onClick={goMain} className="topBarSButton">
          VitaWeb
        </button>
        <button onClick={goSurvey} className="topBarSCompareButtonShort">
          분석하기
        </button>
        <button onClick={goCompare} className="topBarSCompareButtonShort">
          비교하기
        </button>
        <button className="topBarSCompareButtonShort">계산하기</button>
        <button
          onClick={props.isLogined ? goMyPage : goLogin}
          className={
            props.isLogined ? "topBarSButtonMyPage" : "topBarSLoginButton"
          }
        >
          {props.isLogined ? "마이페이지" : "로그인"}
        </button>
      </div>
      <div className="topMainShortSec">
        <div className="topBarSSearchBorderShort">
          <input className="topBarSSearchShort"></input>
        </div>
      </div>
    </div>
  );
}
export default TopBarShort;
