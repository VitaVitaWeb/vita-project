import { useState, useEffect, useContext } from "react";
import CustomerInfo from "../../customerInfo";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./topBar.css"; // 새로운 CSS 파일을 추가하고 아래에서 사용합니다.

import axios from "axios";
function TopBar() {
  // 각각의 페이지들을 이동하기 위한 함수 입니다.
  const movePage = useNavigate();
  const { user, logOut, isLogined, setIsLogined } = useContext(CustomerInfo);

  const goPage = (route) => {
    movePage(route);
  };

  const logOutAndSetLoginState = async () => {
    try {
      await axios.get("/auth/logout"); // Add this line
      logOut();
      alert("로그아웃 하였습니다.");
      movePage("/mainPage");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get("/auth/checkLogin");
        if (response.data.id) {
          // 로그인 상태를 체크하는 부분이 수정되었습니다.
          setIsLogined(true);
          console.log("isLogined set to true");
        } else {
          setIsLogined(false);
          console.log("isLogined set to false");
        }
      } catch (error) {
        console.error("Failed to check login status:", error);
      }
    };
    checkLoginStatus();
  }, []); // 의존성 배열을 빈 배열로 설정하면 컴포넌트가 마운트될 때만 실행됩니다.

  return (
    <header className="top-bar bg-white text-orange border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <button
            onClick={() => goPage("/mainPage")}
            className="d-flex align-items-center mb-5 mb-lg-0 text-orange text-decoration-none border-0 logo"
          >
            VitaWeb
          </button>

          <div className="d-flex justify-content-end">
            <button
              onClick={() => {
                if (isLogined) {
                  goPage("/surveyFormation");
                } else {
                  alert("로그인이 필요합니다.");
                }
              }}
              className="btn btn-outline-orange me-2"
            >
              설문조사
            </button>
            <button
              onClick={() => goPage("/ComparePage")}
              className="btn btn-outline-orange me-2"
            >
              비교하기
            </button>
            <button
              onClick={() => goPage("/supplementList")}
              className="btn btn-outline-orange me-2"
            >
              전체 살펴보기
            </button>

            {isLogined ? (
              <>
                <button
                  onClick={() => goPage("/myPage")}
                  className="btn btn-warning"
                >
                  마이페이지
                </button>
                <button
                  onClick={logOutAndSetLoginState}
                  className="btn btn-warning"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <button
                onClick={() => goPage("/loginPage")}
                className="btn btn-warning"
              >
                로그인
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
export default TopBar;
