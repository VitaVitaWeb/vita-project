import TopBar from "../../CommonComponent/TopBar/topBar";
import SurveyMain from "./component/surveyMain";
import SurveyBottomBar from "./component/surveyBottomBar";
import "./component/surveyBackground.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import SurveyFormationApi from "./surveyFormationApi";
import CustomerInfo from "../../customerInfo";

function SurveyFormation() {
  const englishToKorean = {
    cap: {
      text: "캡슐",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_3.7d3cda98.svg&w=64&q=75",
    },
    chew: {
      text: "츄어블",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_6.daf8a0bd.svg&w=64&q=75",
    },
    liq: {
      text: "액상",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_7.03773d70.svg&w=64&q=75",
    },
    pill: {
      text: "정",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75",
    },
    pow: {
      text: "분말",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_8.92adae6b.svg&w=64&q=75",
    },
  };
  const lists = [
    [
      {
        name: englishToKorean["cap"].text,
        dbName: "cap",
        iconUrl: englishToKorean["cap"].iconUrl,
      },
      {
        name: englishToKorean["pill"].text,
        dbName: "pill",
        iconUrl: englishToKorean["pill"].iconUrl,
      },
      {
        name: englishToKorean["pow"].text,
        dbName: "pow",
        iconUrl: englishToKorean["pow"].iconUrl,
      },
      {
        name: englishToKorean["liq"].text,
        dbName: "liq",
        iconUrl: englishToKorean["liq"].iconUrl,
      },
    ],
    [
      {
        name: englishToKorean["chew"].text,
        dbName: "chew",
        iconUrl: englishToKorean["chew"].iconUrl,
      },
    ],
  ];

  const shortLists = [
    [
      {
        name: englishToKorean["cap"].text,
        dbName: "cap",
        iconUrl: englishToKorean["cap"].iconUrl,
      },
      {
        name: englishToKorean["pill"].text,
        dbName: "pill",
        iconUrl: englishToKorean["pill"].iconUrl,
      },
      {
        name: englishToKorean["pow"].text,
        dbName: "pow",
        iconUrl: englishToKorean["pow"].iconUrl,
      },
    ],
    [
      {
        name: englishToKorean["liq"].text,
        dbName: "liq",
        iconUrl: englishToKorean["liq"].iconUrl,
      },
      {
        name: englishToKorean["chew"].text,
        dbName: "chew",
        iconUrl: englishToKorean["chew"].iconUrl,
      },
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
      {" "}
      <TopBar></TopBar>
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
    </SurveyFormationApi.Provider>
  );
}
export default SurveyFormation;
