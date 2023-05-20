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
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState(null);

  const movePage = useNavigate();
  function goSignUpPage() {
    movePage("/signUpPage");
  }
  function goMainPage() {
    movePage("/mainPage");
  }
  function goIdSearch() {
    movePage("/searchPage", {
      state: { status: true },
    });
  }
  function goPassSearch() {
    movePage("/searchPage", {
      state: { status: false },
    });
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
      if (data.data) {
        onLogin();
      } else {
        setIsLoginFailed(true);
        setLoginErrorMessage("아이디 또는 비밀번호를 잘못 입력하셨습니다.");
      }
    } catch {
      console.log("error in login");
    }
  };

  const onLogin = async () => {
    try {
      const data = await axios.get("/member/detail", {
        params: { id: inputInfo.id },
      });
      userInfo.setContextApi(data.data);
      goMainPage();
    } catch {
      console.log("error in get member detail");
    }
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
            type="password"
            onChange={onChangePassword}
            className="loginPageInput"
            placeholder="비밀번호:"
          ></input>
        </div>
        <div className={isLoginFailed ? "loginPageLoginFalse" : null}>
          {loginErrorMessage}
        </div>
        <div className="displayFlex">
          <button className="loginPageButton" onClick={onTryLogin}>
            로그인
          </button>
        </div>
        <button className="loginPageIdSearchButton" onClick={goIdSearch}>
          아이디 찾기
        </button>
        <button className="loginPagePassSearchButton" onClick={goPassSearch}>
          비밀번호 찾기
        </button>
        <button className="loginPageSignUpButton" onClick={goSignUpPage}>
          회원가입
        </button>
      </div>
      <TopBar></TopBar>
    </div>
  );
}
export default Login;
