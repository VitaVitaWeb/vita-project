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
  const [some, setsome] = useState("false");
  const asdf = async () => {
    console.log(userInfo);
    setsome("true");
  };
  const asdfe = async () => {
    try {
      const data = await axios.get("/auth/checkLogin");
      console.log(data);
    } catch {
      console.log("error in login");
    }
  };
  const asdfea = async () => {
    try {
      const data = await axios.get("/auth/logout");
      console.log(data);
    } catch {
      console.log("error in login");
    }
  };
  const movePage = useNavigate();
  return (
    <div>
      <button onClick={asdf}>asdf</button>
      <button onClick={asdfe}>{some}</button>
      <button onClick={asdfea}>asdfafa</button>
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
