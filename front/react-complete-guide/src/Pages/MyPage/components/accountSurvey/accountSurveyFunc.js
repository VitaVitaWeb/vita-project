import CustomerInfo from "../../../../customerInfo";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import SurveyCheckName from "./surveyCheckName";

function AccountSurveyFunc() {
  const userInfo = useContext(CustomerInfo);
  const [surveyData, setSurveyData] = useState([]);
  const GetSurveyData = async () => {
    try {
      const data = await axios.get("/survey/function", {
        params: {
          id: userInfo.user.id,
        },
      });

      let dataList = [];
      for (let objKey in data.data) {
        if (data.data[objKey] && objKey !== "funno" && objKey !== "id")
          dataList.push(objKey);
      }
      setSurveyData(dataList);
      console.log(data);
    } catch {
      console.log("error in login");
    }
  };
  useEffect(() => {
    GetSurveyData();
  }, []);

  return (
    <div className="accountSurveyList">
      {surveyData.map((name) => (
        <div className="accountSurveyListBlock">
          {SurveyCheckName(name)}
          <div className="accountSurveyListText">{SurveyCheckName(name)}</div>
        </div>
      ))}
    </div>
  );
}
export default AccountSurveyFunc;
