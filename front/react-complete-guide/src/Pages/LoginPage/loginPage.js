import TopBar from "../../CommonComponent/TopBar/topBar";
import "./component/loginPage.css";
import { useContext } from "react";
import CustomerInfo from "../../customerInfo";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const userInfo = useContext(CustomerInfo);
  const [inputId, setId] = useState();
  const [inputPassword, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const movePage = useNavigate();
  function goSignUpPage() {
    movePage("/signUpPage");
  }

  const onChangeId = (val) => {
    //아이디 입력시 갱신
    setId(val.target.value);
    userInfo.Id = inputId;
  };
  const onChangePassword = (val) => {
    //비밀번호 입력시 갱신
    setPassword(val.target.value);
    userInfo.password = inputPassword;
  };
  const onTryLogin = async () => {
    try {
      setLoading(true);
      const data = await axios.post("주소", userInfo);

      if (data === "성공") {
        console.log("로그인");
        onLogin();
      }
      if (data === "실패") {
      }
    } catch {
      console.log("error in post");
    }
    setLoading(false);
  };

  const onLogin = () => {
    //로그인 성공시
  };

  return (
    <div>
      <div className="loginPageMain">
        <div className="loginPageBox">
          <input
            onChange={onChangeId}
            className="loginPageInput"
            placeholder="아이디:"
          ></input>
        </div>
        <div className="loginPageBox">
          <input
            onChange={onChangePassword}
            className="loginPageInput"
            placeholder="비밀번호:"
          ></input>
        </div>
        <div className="displayFlex">
          <button className="loginPageLoginButton" onClick={onTryLogin}>
            로그인
          </button>
          <button className="loginPageAssignButton" onClick={goSignUpPage}>
            회원가입
          </button>
        </div>
      </div>
      <TopBar></TopBar>
    </div>
  );
}
export default Login;
