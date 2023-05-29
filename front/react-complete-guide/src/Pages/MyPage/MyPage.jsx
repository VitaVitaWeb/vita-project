import { useEffect, useState } from "react";
import { Select } from "antd";
import TopBar from "../../CommonComponent/TopBar/topBar";
import UserInfo from "../MyPage/conponents/UserInfo";
import CompareVitaSpace from "../ComparePage/CompareSections/CompareDetailsSpaces/CompareFunctionalitySpace";
import axios from "axios";

const options = [
  {
    label: "스트레스케어",
    value: "스트레스케어",
  },
  {
    label: "탄력증진",
    value: "탄력증진",
  },
  {
    label: "눈건조감개선",
    value: "눈건조감개선",
  },
  {
    label: "관절및연골건강",
    value: "관절및연골건강",
  },
  {
    label: "항산화",
    value: "항산화",
  },
  {
    label: "시력 및 피로감 개선",
    value: "시력 및 피로감 개선",
  },
  {
    label: "피부건강",
    value: "피부건강",
  },
  {
    label: "체지방 감소",
    value: "체지방 감소",
  },
  {
    label: "면역력 감소",
    value: "면역력 감소",
  },
  {
    label: "장건강",
    value: "장건강",
  },
  {
    label: "혈압관리",
    value: "혈압관리",
  },
  {
    label: "혈행개선",
    value: "혈행개선",
  },
  {
    label: "뼈건강",
    value: "뼈건강",
  },
  {
    label: "콜레스테롤",
    value: "콜레스테롤",
  },
  {
    label: "수치개선",
    value: "수치개선",
  },
  {
    label: "간건강",
    value: "간건강",
  },
];

const options2 = [
  {
    label: "캡슐형태",
    value: "캡슐형태",
  },
  {
    label: "정 형태",
    value: "정 형태",
  },
  {
    label: "가루 형태",
    value: "가루 형태",
  },
  {
    label: "액상 형태",
    value: "액상 형태",
  },
  {
    label: "츄어블 형태",
    value: "츄어블 형태",
  },
];

const MyPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [surveyResults, setSurveyResults] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const userId = localStorage.getItem("userId");
        console.log(userId);
        // 사용자 아이디가 없는 경우 에러 핸들링
        if (!userId) {
          console.error("No user id found in local storage");
          return;
        }

        // userInfo 요청
        const userInfoResponse = await axios.get("/member/detail", {
          params: { id: userId }, // 사용자 ID를 백엔드에 전송
        });

        const userInfo = userInfoResponse.data;

        // 설문조사 결과 요청

        const functionResponse = await axios.get("/survey/function", {
          params: { id: userId },
        });

        const formulationResponse = await axios.get("/survey/formulation", {
          params: { id: userId },
        });

        const surveyResults = {
          functionData: functionResponse.data,
          formulationData: formulationResponse.data,
        };

        setUserInfo(userInfo);
        setSurveyResults(surveyResults);
        setSelectedOptions(surveyResults.functionData);
        setSelectedOptions2(surveyResults.formulationData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (value) => {
    setSelectedOptions(value);
  };

  const handleChange2 = (value) => {
    setSelectedOptions2(value);
  };

  if (!userInfo || !surveyResults) return "Loading..."; // Or a proper loading spinner

  return (
    <div>
      <TopBar></TopBar>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "calc(100vh - 60px)", // Assuming TopBar is 60px in height
        }}
      >
        <UserInfo userInfo={userInfo} style={{ margin: "20px 0" }} />
        <div style={{ margin: "20px 0" }}>
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            defaultValue={surveyResults?.functionData} // Add null check here
            onChange={handleChange}
            options={options2}
          />

          <Select
            mode="multiple"
            allowClear
            style={{
              width: "100%",
            }}
            placeholder="Please select"
            defaultValue={surveyResults?.formulationData} // Add null check here
            onChange={handleChange2}
            options={options}
          />
        </div>
        <div style={{ margin: "20px 0" }}>
          {selectedOptions.length > 0 && selectedOptions2.length > 0 && (
            <CompareVitaSpace
              selectedOptions={selectedOptions}
              selectedOptions2={selectedOptions2}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
