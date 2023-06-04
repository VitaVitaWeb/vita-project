import AccountSpec from "./components/accountSpec";
import AccountSurvey from "./components/accountSurvey/accountSurvey";
import MyPageLeftBar from "./components/myPageLeftBar";
import TopBar from "../../CommonComponent/TopBar/topBar";
import "./myPage.css";
import CustomerInfo from "../../customerInfo";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function MyPage() {
  const { setCustomerInfo } = useContext(CustomerInfo);
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const data = await axios.get("/auth/checkLogin");
        setCustomerInfo({ user: data.data });
      } catch {
        console.log("error in login");
      }
    };
    checkLogin();
  }, []);
  return (
    <div>
      <div id="1">
        <TopBar />
      </div>
      <div className="myPageBorder">
        <MyPageLeftBar />
        <div className="myPageMain">
          <div id="2">
            <AccountSpec />
          </div>
          <div id="3">
            <AccountSurvey />
          </div>
          {/* 
          
          선호 영양제 태그
          경계선
          선호 영양제 형태
          선호 영양제 효능

          찜목록
          경계선
          영양제 목록들

          로그아웃 */}
        </div>
      </div>
    </div>
  );
}
export default MyPage;
