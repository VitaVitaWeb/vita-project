import './CompareDetailsSectionStyle.css';
import CompareSearchButton from './CompareDetailsSpaces/CompareSearchButton';
import CompareFunctionalitySpace from './CompareDetailsSpaces/CompareFunctionalitySpace';
import CompareFormSpace from './CompareDetailsSpaces/CompareFormSpace';
import CompareHowtoeatSpace from './CompareDetailsSpaces/CompareHowtoeatSpace';
import CompareNutrientSpace from './CompareDetailsSpaces/CompareNutrientSpace';
import CompareCautionSpace from './CompareDetailsSpaces/CompareCautionSpace';
import CompareButtonsSpace from './CompareDetailsSpaces/CompareButtonsSpace';
import VitaBlock from '../../../CommonComponent/VitaBlock';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';

function CompareDetailsSection() {
    const dummyVita = [
        {
            vitaCompany: "종근당건강",
            vitaWishCount: 2130,
            vitaWish: false,
            vitaHowtoeat: "1일 1회, 1회 1포를 식전·식후 어느때나 물 없이 섭취하십시오.",
            vitaCaution: "현재 국내에서 생산되고 식품의약품안전처에 등록된 제품에 한하여 섭취 시 유의사항을 제공하고 있습니다.",
        },
        {
            vitaCompany: "고려은단",
            vitaWishCount: 1908,
            vitaWish: false,
            vitaHowtoeat: "1일 1회, 1회 1정(1,080mg)을 식사 후 먹는물로 섭취한다.",
            vitaCaution: "* 공복에 섭취시 위장장애로 설사를 유발할 수 있으니 음식물과 함께 섭취하거나 식후에 섭취하십시오.",

        },
        {
            vitaCompany: "얼라이브",
            vitaWishCount: 1343,
            vitaWish: false,
            vitaHowtoeat: "1일 1정을 물과 함께 섭취하십시오.",
            vitaCaution: "* 특정질환, 특이체질, 알레르기체질, 임산부의 경우에는 간혹 개인에 따라 과민반응이 나타날 수 있으므로 원료를 확인하시고, 섭취전에 전문가와 상담하시기 바랍니다.",
        }
    ];

    // 상품 선택 여부
    // selectedProduct에 상품 정보 저장됨
    const [selectedProducts, setSelectedProducts] = useState([]);

    const onProductSelected = (product) => {
        console.log('Selected Products in Detail Sections:', product);
        setSelectedProducts([...selectedProducts, product]);
    };

    // 비교하기 버튼
    const showCompareButton = useSelector(state => state.showCompareButton);
    const dispatch = useDispatch();

    const handleCompareButtonClick = () => {
        if (selectedProducts.length < 2) {
            alert("비교할 제품을 최소 2개 이상 선택해주세요.");
        } else {
            dispatch({ type: 'toggle' });
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
                {!showCompareButton &&
                    <div id="compare-button-space">
                        <button type="button" onClick={handleCompareButtonClick} id="compare-button">비교하기</button>
                    </div>
                }
                {showCompareButton &&
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