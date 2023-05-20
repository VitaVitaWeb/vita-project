import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./component/topBarLong.css";
function TopBarLong(props) {
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

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className="topBarLong">
      <div className={innerWidth > 1300 ? "topMainLong" : "topMainLongFix"}>
        <button onClick={goMain} className="topBarLPageButton">
          VitaWeb
        </button>
        <div className="topBarLPageSearchBorder">
          <input className="topBarLPageSearch"></input>
        </div>
        <button onClick={goSurvey} className="topBarLCompareButton">
          분석하기
        </button>
        <button onClick={goCompare} className="topBarLCompareButton">
          비교하기
        </button>
        <button className="topBarLCompareButton">계산하기</button>
        <button
          onClick={props.isLogined ? goMyPage : goLogin}
          className={
            props.isLogined ? "topBarLLoginButtonMyPage" : "topBarLLoginButton"
          }
        >
          {props.isLogined ? "마이페이지" : "로그인"}
        </button>
      </div>
    </div>
  );
}

export default TopBarLong;
