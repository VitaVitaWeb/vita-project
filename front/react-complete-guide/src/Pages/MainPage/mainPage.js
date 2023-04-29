import TopBar from "../../CommonComponent/TopBar/topBar";
import Main from "./component/main";
import MainSec from "./component/mainSec";
import MainBestItem from "./component/mainBestItem";
import MainThird from "./component/mainThird";
import axios from "axios";
import CustomerInfo from "../../customerInfo";
import React, { useContext, useState } from "react";

function MainPage() {
  const userInfo = useContext(CustomerInfo);
  const asdf = async () => {
    try {
      const data = await axios.get("/member/detail", {
        params: { id: "swjwpower" },
      });
      console.log(data);
    } catch {
      console.log("error in checkId");
    }
  };
  const loga = () => {
    userInfo.setContextApi((prevState) => ({ ...prevState, id: "ASDF" }));
    console.log(userInfo);
  };
  return (
    <div>
      <button onClick={asdf}>asdf</button>
      <button onClick={loga}>log</button>
      {userInfo.user.id}
      {
        /* <Main></Main>
      <MainSec></MainSec>
      <MainBestItem></MainBestItem>
      <MainThird></MainThird> */
        <TopBar></TopBar>
      }
    </div>
  );
}
export default MainPage;
