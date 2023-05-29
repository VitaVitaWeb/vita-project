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
  const englishToKorean = {
    act: {
      text: "활력 증진",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_3.725af60e.svg&w=64&q=75",
    },
    bone: {
      text: "뼈 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_15.d4341f14.svg&w=64&q=75",
    },
    col: {
      text: "콜레스트롤 수치 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_16.3281ebc7.svg&w=64&q=75",
    },
    eye: {
      text: "눈 건조감 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_6.bef94ca5.svg&w=64&q=75",
    },
    gan: {
      text: "간 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_11.ef431279.svg&w=64&q=75",
    },
    imn: {
      text: "면역력 증진",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_9.fefc359b.svg&w=64&q=75",
    },
    jang: {
      text: "장 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_10.7917a550.svg&w=64&q=75",
    },
    joint: {
      text: "관절 및 연골건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_4.4796f5ce.svg&w=64&q=75",
    },
    oxy: {
      text: "향산화",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_5.6c3da29b.svg&w=64&q=75",
    },
    prs: {
      text: "혈행 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_13.a739c68d.svg&w=64&q=75",
    },
    sc: {
      text: "스트레스 케어",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_2.925b4f8e.svg&w=64&q=75",
    },
    sight: {
      text: "시력 및 눈 피로감 케어",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-eye-fill"
          viewBox="0 0 16 16"
        >
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg>
      ),
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_14.04556532.svg&w=64&q=75",
    },
    skin: {
      text: "피부 건강",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_7.6eed8833.svg&w=64&q=75",
    },
    vmid: {
      text: "혈중 중성지질 수치 개선",
      iconUrl:
        "https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_17.89018212.svg&w=64&q=75",
    },
  };

  const lists = [
    [
      {
        name: "스트레스 케어",
        dbName: "sc",
        iconUrl: englishToKorean.sc.iconUrl,
      },
      {
        name: "활력 증진",
        dbName: "act",
        iconUrl: englishToKorean.act.iconUrl,
      },
      {
        name: "눈 건조감 개선",
        dbName: "eye",
        iconUrl: englishToKorean.eye.iconUrl,
      },
      {
        name: "관절 및 연골건장",
        dbName: "joint",
        iconUrl: englishToKorean.joint.iconUrl,
      },
    ],
    [
      { name: "항산화", dbName: "oxy", iconUrl: englishToKorean.oxy.iconUrl },
      {
        name: "시력 및 눈 피로감 케어",
        dbName: "sight",
        iconUrl: englishToKorean.sight.iconUrl,
      },
      {
        name: "피부건강",
        dbName: "skin",
        iconUrl: englishToKorean.skin.iconUrl,
      },
      {
        name: "면역력 감소",
        dbName: "imn",
        iconUrl: englishToKorean.imn.iconUrl,
      },
    ],
    [
      {
        name: "장 건강",
        dbName: "jang",
        iconUrl: englishToKorean.jang.iconUrl,
      },
      { name: "간 건강", dbName: "gan", iconUrl: englishToKorean.gan.iconUrl },
      {
        name: "혈압 관리",
        dbName: "prs",
        iconUrl: englishToKorean.prs.iconUrl,
      },
      {
        name: "뼈 건강",
        dbName: "bone",
        iconUrl: englishToKorean.bone.iconUrl,
      },
    ],
    [
      {
        name: "콜레스테롤 수치 개선",
        dbName: "col",
        iconUrl: englishToKorean.col.iconUrl,
      },
      {
        name: "혈중 중성지질 수치 개선",
        dbName: "vmid",
        iconUrl: englishToKorean.vmid.iconUrl,
      },
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
    return axios
      .post("/survey/insert", {
        ...dataform,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("surveyPostError");
      });
  };

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });
  const movePage = useNavigate();
  function goNextPage() {
    postSurvey().then(() => {
      alert("설문조사가 저장되었습니다!");
    });
    movePage("/mainPage");
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
        <SurveyMain lists={lists} text={text}></SurveyMain>
      </div>
      <SurveyBottom nextNav={goNextPage} prevNav={goPrevPage}></SurveyBottom>
    </SurveyPurposeApi.Provider>
  );
}
export default SurveyPurpose;
