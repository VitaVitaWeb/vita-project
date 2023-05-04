import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage/mainPage";
import SurveyFormation from "./Pages/Survey/surveyFormation";
import SurveyPurpose from "./Pages/Survey/surveyPurpose";
import VitaInfoPage from "./Pages/InfoPage/VitaInfoPage";
import VitaComparePage from "./Pages/ComparePage/VitaComparePage";
import LoginPage from "./Pages/LoginPage/loginPage";
import SignUpPage from "./Pages/LoginPage/signUpPage";
import CustomerInfo from "./customerInfo";
import SurveyListApi from "./Pages/Survey/SurveyListApi";
import MyPage from "./Pages/MyPage/MyPage"
import Calculate from "./Pages/CalculatePage/Calculate.jsx"
import React, { useState, createContext } from "react";
function App() {
  const [user, setUser] = useState({});
  return (
    <CustomerInfo.Provider value={{ user: user, setContextApi: setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={"/mainPage"} element={<MainPage />}></Route>
          <Route
            path={"/surveyFormation"}
            element={<SurveyFormation />}
          ></Route>
          <Route path={"/surveyPurpose"} element={<SurveyPurpose />}></Route>
          <Route path={"/ComparePage"} element={<VitaComparePage />}></Route>
          <Route path={"/InfoPage"} element={<VitaInfoPage />}></Route>
          <Route path={"/loginPage"} element={<LoginPage />}></Route>
          <Route path={"/signUpPage"} element={<SignUpPage />}></Route>
          <Route path={"/myPage"} element={<MyPage/>} />
          <Route path={"/cal"} element={<Calculate/>} />
          
        </Routes>
      </BrowserRouter>
    </CustomerInfo.Provider>
  );
}
export default App;
