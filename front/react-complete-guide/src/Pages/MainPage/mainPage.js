import TopBar from "../../CommonComponent/TopBar/topBar";
import Main from "./component/main";
import MainSec from "./component/mainSec";
import MainBestItem from "./component/mainBestItem";
import MainThird from "./component/mainThird";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomerInfo from "../../customerInfo";
import React, { useContext, useState } from "react";
import Footer from "../Footer/footer";
import MainSlider from "./component/mainSlider";
function MainPage() {
  const userInfo = useContext(CustomerInfo);
  const [some, setsome] = useState("false");
  const slides = [
    {
      title: "홈페이지의 특징 1",
      content:
        "영양제 비교하기!/\n각 영양제들의 영양성 분을 확인할 수 있어요!.",
      imageUrl: "/img/image1.jpg",
    },
    { title: "Second slide", content: "This is the second slide." },
    // ...또 다른 슬라이드 내용
  ];
  // const asdf = async () => {
  //   console.log(userInfo);
  //   setsome("true");
  // };
  // const asdfe = async () => {
  //   try {
  //     const data = await axios.get("/auth/checkLogin");
  //     console.log(data);
  //   } catch {
  //     console.log("error in login");
  //   }
  // };
  // const asdfea = async () => {
  //   try {
  //     const data = await axios.get("/auth/logout");
  //     console.log(data);
  //   } catch {
  //     console.log("error in login");
  //   }
  // };
  // const movePage = useNavigate();
  return (
    <div>
      <TopBar></TopBar>
      <MainSlider slides={slides} />
      {/* <button onClick={asdf}>asdf</button>
      <button onClick={asdfe}>{some}</button>
      <button onClick={asdfea}>asdfafa</button> */}
      {userInfo.user.id}

      {/* <Main></Main>
      <MainSec></MainSec>
      <MainBestItem></MainBestItem>
      <MainThird></MainThird> */}
      <Footer />
    </div>
  );
}
export default MainPage;
