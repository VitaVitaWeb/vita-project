import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./component/topBarLong.css";
function TopBarLong() {
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

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <div className="topBarLong">
      <div className={innerWidth > 1300 ? "topMainLong" : "topMainLongFix"}>
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
export default TopBarLong;
