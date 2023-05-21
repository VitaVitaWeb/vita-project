import { useState, useEffect, useContext } from "react";
import CustomerInfo from "../../customerInfo";
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";
function TopBar(props) {
  // 각각의 페이지들을 이동하기 위한 함수 입니다.
  const movePage = useNavigate();
  //
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const userInfo = useContext(CustomerInfo);
  const [isLogined, setIsLogined] = useState(false);
  const goPage = (route) => movePage(route);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const logOut = () => {
    setIsLogined(false);
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
    if (searchKeyword) {
      searchProducts(searchKeyword);
    }
  }, [searchKeyword]);

  const searchProducts = async (keyword) => {
    try {
      const response = await axios.get("/search", { params: { q: keyword } });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (userInfo.user.id) {
      setIsLogined(true);
      console.log(userInfo.user.id);
    } else setIsLogined(false);
  }, [userInfo]);
  /// 위의 코드를 로그인여부를 확인하기 위해 적용되었습니다.
  return (
    <header className=" bg-white text-orange border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <button
            onClick={goPage("/mainPage")}
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
          <form onSubmit={handleSearchSubmit}>
            <input
              className="shadow form-control form-control-dark bg-white text-black"
              type="text"
              placeholder="영양제 검색하기"
              aria-label="Search"
              style={{ fontSize: "0.7em", width: "400px", margin: 50 }}
            />{" "}
          </form>
          {products.map((product) => (
            <div key={product.id}>{product.name}</div>
          ))}

          <div className="text-end">
            <button
              onClick={goPage("/surveyFormation")}
              className="btn btn-outline-orange me-2"
              style={{ fontWeight: "bold", color: "orange" }}
            >
              분석하기
            </button>
            <button
              onClick={goPage("/ComparePage")}
              className="btn btn-outline-orange me-2"
              style={{ fontWeight: "bold", color: "orange" }}
            >
              비교하기
            </button>
            <button
              onClick={goPage("/supplementList")}
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
                  onClick={logOut}
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
