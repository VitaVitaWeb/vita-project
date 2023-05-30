import React, { useState } from "react";
import axios from "axios";
import "./searchPage.css";
import TopBar from "../../../CommonComponent/TopBar/topBar";
import Footer from "../../Footer/footer";
function PassSearch(props) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const OnclickIdButton = () => {
    props.setOnIdSearch(true);
  };

  const OnclickPwButton = () => {
    props.setOnIdSearch(false);
  };

  const requestVerifyCode = async () => {
    try {
      await axios.post("/member/findpwd", { email: email });
      alert("인증 코드를 발급하였습니다. 이메일을 확인해주세요.");
    } catch (err) {
      alert("인증 코드 발급에 실패하였습니다.");
    }
  };

  const verifyCode = async () => {
    try {
      let response = await axios.post("/member/verifypwd", {
        email: email,
        code: code,
      });
      if (response.data) {
        alert(response.data);
        // 여기에 사용자가 로그인 페이지로 리디렉션되거나, 초기화가 성공적으로 이루어졌다는 것을 표시하는 코드를 추가하세요.
      } else {
        alert("인증 코드가 잘못되었습니다. 다시 시도해주세요.");
      }
    } catch (err) {
      alert("인증 코드 확인에 실패하였습니다.");
    }
  };

  return (
    <div>
      <TopBar></TopBar>
      <div className="searchPageMain">
        <div className="searchPageIdPwButtom">
          <button
            className="searchPageIdButtonDisabled"
            onClick={OnclickIdButton}
          >
            아이디 찾기
          </button>
          <button className="searchPagePwButton" onClick={OnclickPwButton}>
            비밀번호 찾기
          </button>
        </div>
        <div className="searchPageInputArea">
          <div className="idSearchPageBox">
            <div className="searchPagePwBox">
              <input
                className="idSearchPageInput"
                placeholder="이메일:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="searchPageCodeButton"
                onClick={requestVerifyCode}
              >
                인증코드 보내기
              </button>
            </div>
            <div>
              <input
                className="idSearchPageInput"
                placeholder="인증코드:"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <button className="searchPageCodeButton" onClick={verifyCode}>
                인증코드 확인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PassSearch;
