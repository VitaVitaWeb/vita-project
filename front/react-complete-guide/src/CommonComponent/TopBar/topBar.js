import { useState, useEffect, useContext } from "react";
import CustomerInfo from "../../customerInfo";
import { useNavigate, Link } from "react-router-dom";
import { Form } from "react-bootstrap";

import axios from "axios";
function TopBar() {
  // 각각의 페이지들을 이동하기 위한 함수 입니다.
  const movePage = useNavigate();
  //
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const { user, setContextApi, logOut } = useContext(CustomerInfo);
  const [isLogined, setIsLogined] = useState(user ? !!user.id : false);
  const goPage = (route) => movePage(route);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const logOutAndSetLoginState = () => {
    logOut();
    setIsLogined(false);
    alert("로그아웃 하였습니다.");
    movePage("/mainPage");
  };

  /*
  반응형을 위한 함수인걸로 추정되나 현재는 부트스트랩을 적용하여 필요가 없습니다.
  */
  // useEffect(() => {
  //   const resizeListener = () => {
  //     setInnerWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", resizeListener);
  // });
  ////

  useEffect(() => {
    console.log("User info changed:", user);
    if (user.id) {
      setIsLogined(true);
      console.log("User logged in with ID:", user.id);
    } else {
      setIsLogined(false);
      console.log("User logged out");
    }
  }, [user]);

  /// 위의 코드를 로그인여부를 확인하기 위해 적용되었습니다.
  return (
    <header className=" bg-white text-orange border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <button
            onClick={() => goPage("/mainPage")}
            className="d-flex align-items-center mb-5 mb-lg-0 text-orange text-decoration-none border-0"
            style={{
              fontSize: "2em",
              fontWeight: "bold",
              color: "orange",
              border: "none",
              backgroundColor: "white",
            }}
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
              style={{ fontWeight: "bold", color: "orange" }}
            >
              설문조사
            </button>
            <button
              onClick={() => goPage("/ComparePage")}
              className="btn btn-outline-orange me-2"
              style={{ fontWeight: "bold", color: "orange" }}
            >
              비교하기
            </button>
            <button
              onClick={() => goPage("/supplementList")}
              className="btn btn-outline-orange me-2"
              style={{ fontWeight: "bold", color: "orange" }}
            >
              전체 살펴보기
            </button>

            {isLogined ? (
              <>
                <button
                  onClick={() => goPage("/myPage")}
                  className="btn btn-warning"
                  style={{ margin: 10, fontWeight: "bold" }}
                >
                  마이페이지
                </button>
                <button
                  onClick={logOutAndSetLoginState}
                  className="btn btn-warning"
                  style={{ margin: 10, fontWeight: "bold" }}
                >
                  로그아웃
                </button>
              </>
            ) : (
              <button
                onClick={() => goPage("/loginPage")}
                className="btn btn-warning"
                style={{ margin: 10, fontWeight: "bold" }}
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
