import TopBar from "../../CommonComponent/TopBar/topBar";
import "./component/loginPage.css";
import { useContext } from "react";
import CustomerInfo from "../../customerInfo";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const userInfo = useContext(CustomerInfo);
  const [inputInfo, setinputInfo] = useState({ id: null, password: null });
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);

  const movePage = useNavigate();
  function goSignUpPage() {
    movePage("/signUpPage");
  }

  const onChangeId = (val) => {
    //아이디 입력시 갱신
    inputInfo.id = val.target.value;
  };
  const onChangePassword = (val) => {
    //비밀번호 입력시 갱신
    inputInfo.password = val.target.value;
  };
  const onTryLogin = async () => {
    try {
      console.log(inputInfo);
      const data = await axios.post("/auth/login", null, {
        params: {
          id: inputInfo.id,
          password: inputInfo.password,
        },
      });
      console.log(data);
      if (data === true) {
        onLogin();
      } else {
        setLoginErrorMessage("올바르지 않은 정보");
      }
    } catch {
      console.log("error in login");
    }
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
          <button className="loginPageButton" onClick={onTryLogin}>
            로그인
          </button>
          <button className="loginPageSignUpButton" onClick={goSignUpPage}>
            회원가입
          </button>
        </div>
        <div className="loginPageLoginFalse">{loginErrorMessage}</div>
      </div>
      <TopBar></TopBar>
    </div>
  );
}
export default Login;
