import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/mainPage";
import SurveyFormation from "./Pages/Survey/surveyFormation";
import SurveyPurpose from "./Pages/Survey/surveyPurpose";
import VitaInfoPage from "./Pages/InfoPage/VitaInfoPage";
import VitaComparePage from "./Pages/ComparePage/VitaComparePage";
import LoginPage from "./Pages/LoginPage/loginPage";
import SignUpPage from "./Pages/LoginPage/signUpPage";
import { CustomerInfoProvider } from "./customerInfo";
import SupplementList from "./Pages/ListPage/List";
import MyPage from "./Pages/MyPage/myPage";
import { useEffect } from "react";
import axios from "axios";
import TopBar from "./CommonComponent/TopBar/topBar";
import SearchPage from "./Pages/IdPwSearchPage/searchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, createContext } from "react";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const data = await axios.get("/auth/checkLogin");
        setUser(data.data);
      } catch {
        console.log("error in login");
      }
    };
    checkLogin();
  }, []);
  return (
    <CustomerInfoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={"/mainPage"} element={<MainPage />}></Route>
          <Route
            path={"/surveyFormation"}
            element={<SurveyFormation />}
          ></Route>
          <Route path={"/supplementList"} element={<SupplementList />} />
          <Route path={"/surveyPurpose"} element={<SurveyPurpose />}></Route>
          <Route path={"/ComparePage"} element={<VitaComparePage />}></Route>
          <Route path={"/InfoPage/:id"} element={<VitaInfoPage />}></Route>
          <Route path={"/loginPage"} element={<LoginPage />}></Route>
          <Route path={"/signUpPage"} element={<SignUpPage />}></Route>
          <Route path={"/myPage"} element={<MyPage />} />
          <Route path={"/searchPage"} element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </CustomerInfoProvider>
  );
}

export default App;
