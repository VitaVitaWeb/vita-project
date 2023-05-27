import TopBar from "../../CommonComponent/TopBar/topBar";
import SurveyMain from "./component/surveyMain";
import SurveyBottom from "./component/surveyBottomBar";
import "./component/surveyBackground.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import SurveyPurposeApi from "./surveyPurposeApi";
import CustomerInfo from "../../customerInfo";
import axios from "axios";
import queryString from "query-string";

function SurveyPurpose() {
  const lists = [
    [
      { name: "스트레스 케어", dbName: "sc" },
      { name: "활력 증진", dbName: "act" },
      { name: "눈 건조감 개선", dbName: "eye" },
      { name: "관절 및 연골건장", dbName: "joint" },
    ],
    [
      { name: "항산화", dbName: "oxy" },
      { name: "시력 및 눈 피로감 케어", dbName: "sight" },
      { name: "피부건강", dbName: "skin" },
      { name: "면역력 감소", dbName: "imn" },
    ],
    [
      { name: "장 건강", dbName: "jang" },
      { name: "간 건강", dbName: "gan" },
      { name: "혈압 관리", dbName: "prs" },
      { name: "뼈 건강", dbName: "bone" },
    ],
    [
      { name: "콜레스테롤 수치 개선", dbName: "col" },
      { name: "혈중 중성지질 수치 개선", dbName: "vmid" },
    ],
  ];
  const shortLists = [
    [
      { name: "스트레스 케어", dbName: "sc" },
      { name: "활력 증진", dbName: "act" },
      { name: "눈 건조감 개선", dbName: "eye" },
    ],
    [
      { name: "관절 및 연골건장", dbName: "joint" },
      { name: "항산화", dbName: "oxy" },
      { name: "시력 및 눈 피로감 케어", dbName: "sight" },
    ],
    [
      { name: "피부건강", dbName: "skin" },
      { name: "면역력 감소", dbName: "imn" },
      { name: "장 건강", dbName: "jang" },
    ],
    [
      { name: "간 건강", dbName: "gan" },
      { name: "혈압 관리", dbName: "prs" },
      { name: "뼈 건강", dbName: "bone" },
    ],
    [
      { name: "콜레스테롤 수치 개선", dbName: "col" },
      { name: "혈중 중성지질 수치 개선", dbName: "vmid" },
    ],
  ];
  const text = {
    title: "영양제를 먹는 이유가\n무엇인가요?",
    content: "중복 선택이 가능합니다.",
  };
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const location = useLocation();
  let data = {};
  const customerInfo = useContext(CustomerInfo);
  const config = { "Content-Type": "application/json" };

  const [surveyInfo, setSurveyInfo] = useState({
    sc: false,
    act: false,
    eye: false,
    joint: false,
    oxy: false,
    sight: false,
    skin: false,
    imn: false,
    jang: false,
    gan: false,
    prs: false,
    bone: false,
    col: false,
    vmid: false,
  });

  const postSurvey = async () => {
    let dataform = {
      ...location.state.surveyFor,
      ...surveyInfo,
      id: customerInfo.user.id,
    };
    console.log(dataform);
    const data = await axios.post("/survey/insert", {
      ...dataform,
    });
    try {
      console.log(data);
    } catch {
      console.log("surveyPostError");
    }
  };

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });
  const movePage = useNavigate();
  function goNextPage() {
    postSurvey();
    // movePage("/mainPage");
  }
  function goPrevPage() {
    movePage("/surveyFormation");
  }
  return (
    <SurveyPurposeApi.Provider
      value={{
        surveyInfo: surveyInfo,
        setContextApi: setSurveyInfo,
      }}
    >
      <TopBar></TopBar>
      <div className="surveyBackgroundBorder">
        <SurveyMain
          lists={innerWidth > 1000 ? lists : shortLists}
          text={text}
        ></SurveyMain>
      </div>
      <SurveyBottom nextNav={goNextPage} prevNav={goPrevPage}></SurveyBottom>
    </SurveyPurposeApi.Provider>
  );
}
export default SurveyPurpose;
