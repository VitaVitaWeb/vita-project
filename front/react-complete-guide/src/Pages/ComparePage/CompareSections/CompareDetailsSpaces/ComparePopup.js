import "./ComparePopupStyle.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function ComparePopup({ onProductSelected }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // 팝업창 여부
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어
  const [products, setProducts] = useState([]); // 검색된 상품 목록

  // 검색 기능
  useEffect(() => {
    if (searchKeyword) {
      searchProducts(searchKeyword);
    }
  }, [searchKeyword]);

  // api로 상품 정보 받아오기
  const searchProducts = async (keyword) => {
    try {
      const response = await axios.get("/search", { params: { q: keyword } });
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // 팝업 여는 버튼
  const handleSearchButtonClick = () => {
    setIsPopupOpen(true);
  };

  // 검색하기 버튼
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setIsPopupOpen(false);
  };

  // 상품 선택하기 버튼
  function handleSelectProduct(product) {
    console.log("Selected Product in popup:", product);
    onProductSelected(product);
    setIsPopupOpen(false);
  }

  return (
    <>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbTLeo4LDVGQRQgOJ7iF1O6HDhG0B53OSdQ&usqp=CAU"
        alt="영양제를 추가해주세요"
        className="vita-need-choice-image"
        onClick={handleSearchButtonClick}
      />
      {isPopupOpen && (
        <div id="popup">
          <div id="popup-top-space">
            <div>
              <h2>
                찾고 싶은 영양제의 <br /> 브랜드명 혹은 제품명을 <br />{" "}
                검색해주세요!
              </h2>
            </div>
            <button
              id="popup-close-button"
              onClick={() => setIsPopupOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <form id="popup-form" onSubmit={handleSearchSubmit}>
            <input
              id="search-form"
              type="text"
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
            />
            <button id="search-button" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
          <div id="popup-bottom-space">
            {products.map((product) => (
              <button
                key={product.id}
                className="temporary-product"
                onClick={() => handleSelectProduct(product)}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ComparePopup;
