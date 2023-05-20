import TopBar from "../../CommonComponent/TopBar/topBar";
import SurveyMain from "./component/surveyMain";
import SurveyBottomBar from "./component/surveyBottomBar";
import "./component/surveyBackground.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import SurveyFormationApi from "./surveyFormationApi";
import CustomerInfo from "../../customerInfo";

function SurveyFormation() {
  const lists = [
    [
      { name: "캡슐", dbName: "cap" },
      { name: "정", dbName: "pill" },
      { name: "가루", dbName: "pow" },
      { name: "액상", dbName: "liq" },
    ],
    [{ name: "츄어블", dbName: "chew" }],
  ];
  const shortLists = [
    [
      { name: "캡슐", dbName: "cap" },
      { name: "정", dbName: "pill" },
      { name: "가루", dbName: "pow" },
    ],
    [
      { name: "액상", dbName: "liq" },
      { name: "츄어블", dbName: "chew" },
    ],
  ];

  const text = {
    title: "어떤 제형을 선호하시나요?",
    content: "중복 선택이 가능합니다.",
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
    movePage("/surveyPurpose", { state: { surveyFor: surveyInfo } });
  }
  function goPrevPage() {
    movePage("/mainPage");
  }
  const customerInfo = useContext(CustomerInfo);
  const [surveyInfo, setSurveyInfo] = useState({
    cap: false,
    pill: false,
    pow: false,
    liq: false,
    chew: false,
  });

  return (
    <SurveyFormationApi.Provider
      value={{
        surveyInfo: surveyInfo,
        setContextApi: setSurveyInfo,
      }}
    >
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
    </SurveyFormationApi.Provider>
  );
}
export default SurveyFormation;
