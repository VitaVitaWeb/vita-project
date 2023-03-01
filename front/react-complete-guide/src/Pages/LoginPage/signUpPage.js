import TopBar from "../../CommonComponent/TopBar/topBar";
import "./component/loginPage.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUpPage() {
  const [userInfo, setUserInfo] = useState();
  const [inputId, setId] = useState();
  const [inputPassword, setPassword] = useState();
  const [idCheck, setIdCheck] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [idCheckText, setIdCheckText] = useState(null);

  const onChangeId = (val) => {
    //아이디 입력시 중복 체크 및 갱신
    setId(val.target.value);
    userInfo.Id = inputId;
  };

  const onChangePassword = (val) => {
    //비밀번호 입력시 갱신
    setPassword(val.target.value);
    userInfo.password = inputPassword;
  };
  const onTryCheckId = async () => {
    // 아이디 중복 체크
    try {
      setLoading(true);
      const data = await axios.post("주소", userInfo.Id);

      if (data === "성공") {
        console.log("사용가능한 아이디");
        setIdCheck(true);
        setIdCheckText("*사용가능한 아이디");
      }
      if (data === "실패") {
        console.log("사용불가능한 아이디");
        setIdCheck(false);
        setIdCheckText("*사용불가능한 아이디");
      }
    } catch {
      console.log("error in checkId");
    }
    setLoading(false);
  };

  const onTrySignUp = async () => {
    // 가입 시도할때
    try {
      setLoading(true);
      const data = await axios.post("주소", userInfo);

      if (data === "성공") {
      }
      if (data === "실패") {
      }
    } catch {
      console.log("error in sign up");
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="loginPageMain">
        <div className="loginPageBox">
          <input
            className="loginPageInput"
            placeholder="아이디:"
            onChange={onChangeId}
          ></input>
          <div
            className={
              idCheck ? "loginPageCheckIdTrue" : "loginPageCheckIdFalse"
            }
          >
            {idCheckText}
          </div>
        </div>
        <div className="loginPageBox">
          <input
            className="loginPageInput"
            placeholder="비밀번호:"
            onChange={onChangePassword}
          ></input>
        </div>
        <div className="displayFlex">
          <button className="loginPageLoginButton" onClick={onTrySignUp}>
            만들기
          </button>
        </div>
      </div>
      <TopBar></TopBar>
    </div>
  );
}
export default SignUpPage;
