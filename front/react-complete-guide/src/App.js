import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/mainPage";
import SurveyFormation from "./Pages/Survey/surveyFormation";
import SurveyPrefer from "./Pages/Survey/surveyPrefer";
import SurveyPurpose from "./Pages/Survey/surveyPurpose";
import VitaInfoPage from "./Pages/InfoPage/VitaInfoPage";
import VitaComparePage from "./Pages/ComparePage/VitaComparePage";
import LoginPage from "./Pages/LoginPage/loginPage";
import SignUpPage from "./Pages/LoginPage/signUpPage";
import MyPage from './Pages/MyPage';
import CustomerInfo from "./customerInfo";
import React, { useState } from "react";
function App() {
  const [userInfo, setContext] = useState("testId");
  return (
    <CustomerInfo.Provider
      value={{
        id: null,
        password: null,
        createdDate: null,
        name: null,
        phoneNo: null,
        birthDay: null,
        gender: null,
        setContext: setContext,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={"/mainPage"} element={<MainPage />}></Route>
          <Route
            path={"/surveyFormation"}
            element={<SurveyFormation />}
          ></Route>
          <Route path={"/surveyPrefer"} element={<SurveyPrefer />}></Route>
          <Route path={"/surveyPurpose"} element={<SurveyPurpose />}></Route>
          <Route path={"/ComparePage"} element={<VitaComparePage />}></Route>
          <Route path={"/InfoPage"} element={<VitaInfoPage />}></Route>
          <Route path={"/loginPage"} element={<LoginPage />}></Route>
          <Route path={"/signUpPage"} element={<SignUpPage />}></Route>
          <Route path="/my" element={<MyPage /> } />
        </Routes>
      </BrowserRouter>
    </CustomerInfo.Provider>
  );
}
export default App;
