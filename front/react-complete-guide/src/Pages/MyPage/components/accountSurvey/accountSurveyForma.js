import CustomerInfo from "../../../../customerInfo";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
function AccountSurveyForma() {
  const userInfo = useContext(CustomerInfo);
  const [surveyData, setSurveyData] = useState([]);
    const GetSurveyData = async () => {
      try {
        const data = await axios.get("/survey/formulation", {
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
    }, [userInfo]);
}
export default AccountSurveyForma;
