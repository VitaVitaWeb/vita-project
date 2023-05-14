import TopBar from "../../CommonComponent/TopBar/topBar";
import Main from "./component/main";
import MainSec from "./component/mainSec";
import MainBestItem from "./component/mainBestItem";
import MainThird from "./component/mainThird";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomerInfo from "../../customerInfo";
import React, { useContext, useState } from "react";

function MainPage() {
  const userInfo = useContext(CustomerInfo);
  const asdf = async () => {
    console.log(userInfo);
  };
  const movePage = useNavigate();
  function goMainPage() {
    movePage("/myPage");
  }
  return (
    <div>
      <button onClick={asdf}>asdf</button>
      <button onClick={goMainPage}>my</button>
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
