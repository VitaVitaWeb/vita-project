import './CompareDetailsSectionStyle.css';
import CompareSearchButton from './CompareDetailsSpaces/CompareSearchButton';
import CompareFunctionalitySpace from './CompareDetailsSpaces/CompareFunctionalitySpace';
import CompareFormSpace from './CompareDetailsSpaces/CompareFormSpace';
import CompareHowtoeatSpace from './CompareDetailsSpaces/CompareHowtoeatSpace';
import CompareNutrientSpace from './CompareDetailsSpaces/CompareNutrientSpace';
import CompareCautionSpace from './CompareDetailsSpaces/CompareCautionSpace';
import CompareButtonsSpace from './CompareDetailsSpaces/CompareButtonsSpace';
import VitaBlock from '../../../CommonComponent/VitaBlock';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

function CompareDetailsSection() {
    const dummyVita = [
        {
            vitaCompany: "종근당건강",
            vitaWishCount: 2130,
            vitaWish: false,
        },
        {
            vitaCompany: "고려은단",
            vitaWishCount: 1908,
            vitaWish: false,

        },
        {
            vitaCompany: "얼라이브",
            vitaWishCount: 1343,
            vitaWish: false,
        }
    ];

    // 상품 선택 여부
    // selectedProduct에 상품 정보 저장됨
    const [selectedProducts, setSelectedProducts] = useState([]);
    const dispatch = useDispatch();
    const [display, setDisplay] = useState(false);

    const onProductSelected = (product) => {
        console.log('Selected Products in Detail Sections:', product);
        setSelectedProducts([...selectedProducts, product]);
    };

    // 비교하기 버튼
    const handleCompareButtonClick = () => {
        if (selectedProducts.length < 2) {
            alert("비교할 제품을 최소 2개 이상 선택해주세요.");
        } else {
            dispatch({ type: 'toggle' });
            setDisplay(showCompareButton => !showCompareButton)
        }
    };

    useEffect(() => {
        console.log('selectedProducts:', selectedProducts);
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
                            onProductSelected={onProductSelected}>
                        </VitaBlock>
                    ))}
                    {Array(3 - selectedProducts.length).fill().map((_, index) => (
                        <CompareSearchButton
                            onProductSelected={onProductSelected}
                        />
                    ))}
                </div>
                {!display ?
                    <div id="compare-button-space">
                        <button type="button" onClick={handleCompareButtonClick} id="compare-button">비교하기</button>
                    </div>
                    :
                    <>
                        <CompareFunctionalitySpace
                            vitaNumbers={selectedProducts.map(product => product.vno)}
                            productCnt={selectedProducts.length}
                        ></CompareFunctionalitySpace>
                        <hr width="1200px"></hr>
                        <CompareFormSpace
                            vitaNumbers={selectedProducts.map(product => product.vno)}
                            productCnt={selectedProducts.length}
                        ></CompareFormSpace>
                        <hr width="1200px"></hr>
                        <CompareHowtoeatSpace
                            vitaNumbers={selectedProducts.map(product => product.vno)}
                            productCnt={selectedProducts.length}
                            vitaHowtoeat={[dummyVita[0].vitaHowtoeat, dummyVita[1].vitaHowtoeat, dummyVita[2].vitaHowtoeat]}
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareHowtoeatSpace>
                        <hr width="1200px"></hr>
                        <CompareNutrientSpace
                            vitaNumbers={selectedProducts.map(product => product.vno)}
                            productCnt={selectedProducts.length}
                        ></CompareNutrientSpace>
                        <hr width="1200px"></hr>
                        <CompareCautionSpace
                            vitaNumbers={selectedProducts.map(product => product.vno)}
                            productCnt={selectedProducts.length}
                            vitaCaution={[dummyVita[0].vitaCaution, dummyVita[1].vitaCaution, dummyVita[2].vitaCaution]}
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareCautionSpace>
                        <hr width="1200px"></hr>
                        <CompareButtonsSpace
                            vitaNumbers={selectedProducts.map(product => product.vno)}
                            productCnt={selectedProducts.length}
                        ></CompareButtonsSpace>
                    </>
                }
            </div>
        </section>
    );
}

export default CompareDetailsSection;