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
  const { setCustomerInfo, setIsLogined } = useContext(CustomerInfo);

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
  const onChangeId = (event) => {
    setinputInfo((prev) => ({ ...prev, id: event.target.value }));
  };

  const onChangePassword = (event) => {
    setinputInfo((prev) => ({ ...prev, password: event.target.value }));
  };
  const onTryLogin = async () => {
    try {
      console.log(inputInfo);
      const response = await axios.post("/auth/login", null, {
        params: {
          id: inputInfo.id,
          password: inputInfo.password,
        },
      });
      console.log(response);
      if (response.data) {
        onLogin();
      } else {
        setIsLoginFailed(true);
        setLoginErrorMessage("아이디 또는 비밀번호를 잘못 입력하셨습니다.");
      }
    } catch (error) {
      console.log("Error in login:", error);
      // print more detailed error information
      console.error(error.response);
      // Or if the error is due to the network issues
      console.error(error.request);
    }
  };

  const onLogin = async () => {
    try {
      const response = await axios.get("/member/detail", {
        params: { id: inputInfo.id },
      });

      setCustomerInfo({ user: response.data });

      localStorage.setItem("userId", response.data.id);

      setIsLogined(true); // 로그인이 성공하면 로그인 상태를 true로 설정합니다.

      alert(`${response.data.name}님! 로그인이 되었습니다.`);

      goMainPage();
    } catch (error) {
      console.log("Error in get member detail:", error);
    }
  };
  return (
    <div>
      <TopBar></TopBar>
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
    </div>
  );
}
export default Login;
