import "./CompareDetailsSectionStyle.css";
import CompareSearchButton from "./CompareDetailsSpaces/CompareSearchButton";
import CompareFunctionalitySpace from "./CompareDetailsSpaces/CompareFunctionalitySpace";
import CompareFormSpace from "./CompareDetailsSpaces/CompareFormSpace";
import CompareHowtoeatSpace from "./CompareDetailsSpaces/CompareHowtoeatSpace";
import CompareNutrientSpace from "./CompareDetailsSpaces/CompareNutrientSpace";
import CompareCautionSpace from "./CompareDetailsSpaces/CompareCautionSpace";
import CompareButtonsSpace from "./CompareDetailsSpaces/CompareButtonsSpace";
import VitaBlock from "../../../CommonComponent/VitaBlock";
import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

function CompareDetailsSection() {
  // 상품 선택 여부
  // selectedProduct에 상품 정보 저장됨
  const [selectedProducts, setSelectedProducts] = useState([]);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);

  const onProductSelected = (product) => {
    console.log("Selected Products in Detail Sections:", product);
    setSelectedProducts([...selectedProducts, product]);
  };

  // 비교하기 버튼
  const handleCompareButtonClick = () => {
    if (selectedProducts.length < 2) {
      alert("비교할 제품을 최소 2개 이상 선택해주세요.");
    } else {
      dispatch({ type: "toggle" });
      setDisplay((showCompareButton) => !showCompareButton);
    }
  };
  const removeProduct = (vno) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.vno !== vno
    );
    setSelectedProducts(updatedProducts);
  };

  useEffect(() => {
    console.log("selectedProducts:", selectedProducts);
  }, [selectedProducts]);

  return (
    <section id="compare-details-section">
      <div id="compare-details-title">
        <h2>제품을 선택해 비교해보세요</h2>
        <button
          type="button"
          onClick={() => window.location.reload()}
          id="reset-button"
        >
          다시 선택하기
        </button>
      </div>
      <div>
        <div id="compare-vita-space">
          {selectedProducts.map((product, index) => (
            <VitaBlock
              vitaNumber={product.vno}
              vitaName={product.name}
              x={true}
              vitaImage={product.img_path}
              onProductSelected={onProductSelected}
              onProductRemoved={removeProduct}
            ></VitaBlock>
          ))}
          {Array(3 - selectedProducts.length)
            .fill()
            .map((_, index) => (
              <CompareSearchButton onProductSelected={onProductSelected} />
            ))}
        </div>
        {!display ? (
          <div id="compare-button-space">
            <button
              type="button"
              onClick={handleCompareButtonClick}
              id="compare-button"
            >
              비교하기
            </button>
          </div>
        ) : (
          <>
            <CompareFunctionalitySpace
              vitaNumbers={selectedProducts.map((product) => product.vno)}
              productCnt={selectedProducts.length}
            ></CompareFunctionalitySpace>
            <hr width="1200px"></hr>
            <CompareFormSpace
              vitaNumbers={selectedProducts.map((product) => product.vno)}
              productCnt={selectedProducts.length}
            ></CompareFormSpace>
            <hr width="1200px"></hr>
            <CompareHowtoeatSpace
              vitaNumbers={selectedProducts.map((product) => product.vno)}
              productCnt={selectedProducts.length}
            ></CompareHowtoeatSpace>
            <hr width="1200px"></hr>-
            <CompareNutrientSpace
              vitaNumbers={selectedProducts.map((product) => product.vno)}
              productCnt={selectedProducts.length}
            ></CompareNutrientSpace>
            <hr width="1200px"></hr>
            <CompareCautionSpace
              vitaNumbers={selectedProducts.map((product) => product.vno)}
              productCnt={selectedProducts.length}
            ></CompareCautionSpace>
            <hr width="1200px"></hr>
            <CompareButtonsSpace
              vitaNumbers={selectedProducts.map((product) => product.vno)}
              productCnt={selectedProducts.length}
            ></CompareButtonsSpace>
          </>
        )}
      </div>
    </section>
  );
}

export default CompareDetailsSection;
