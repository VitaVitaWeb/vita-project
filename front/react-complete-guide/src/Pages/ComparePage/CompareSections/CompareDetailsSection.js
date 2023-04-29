import './CompareDetailsSectionStyle.css';
import CompareSearchButton from './CompareDetailsSpaces/CompareSearchButton';
import CompareVitaSpace from './CompareDetailsSpaces/CompareVitaSpace';
import CompareFunctionalitySpace from './CompareDetailsSpaces/CompareFunctionalitySpace';
import CompareFormSpace from './CompareDetailsSpaces/CompareFormSpace';
import CompareHowtoeatSpace from './CompareDetailsSpaces/CompareHowtoeatSpace';
import CompareNutrientSpace from './CompareDetailsSpaces/CompareNutrientSpace';
import CompareCautionSpace from './CompareDetailsSpaces/CompareCautionSpace';
import CompareButtonsSpace from './CompareDetailsSpaces/CompareButtonsSpace';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState } from 'react';

function CompareDetailsSection() {
    const dummyVita = [
        {
            vitaID: 2,
            vitaName: "락토핏 생유산균 골드",
            vitaCompany: "종근당건강",
            vitaWishCount: 2130,
            vitaWish: false,
            vitaImage: "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210922173604436_600.jpg&w=256&q=75",
            vitaDescription: "영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다.",
            vitaFunctionality: [["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_10.7917a550.svg&w=64&q=75", "장건강"]],
            vitaForm: ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_8.92adae6b.svg&w=64&q=75", "분말"],
            vitaHowtoeat: "1일 1회, 1회 1포를 식전·식후 어느때나 물 없이 섭취하십시오.",
            vitaNutrient: [
                ["영양소1", 50, 40, 70],
                ["영양소2", 70, 40, 50],
                ["영양소4", 30, 20, 30],
                ["영양소5", 40, 20, 30]
            ],
            vitaCaution: "현재 국내에서 생산되고 식품의약품안전처에 등록된 제품에 한하여 섭취 시 유의사항을 제공하고 있습니다.",
            vitaCompareSelected: false,
        },
        {
            vitaID: 3,
            vitaName: "비타민C 1000",
            vitaCompany: "고려은단",
            vitaWishCount: 1908,
            vitaWish: false,
            vitaImage: "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210117120537015_600.jpg&w=256&q=75",
            vitaDescription: "영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다.",
            vitaFunctionality: [["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_5.6c3da29b.svg&w=64&q=75", "향산화"]],
            vitaForm: ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75", "정"],
            vitaHowtoeat: "1일 1회, 1회 1정(1,080mg)을 식사 후 먹는물로 섭취한다.",
            vitaNutrient: [
                ["영양소1", 60, 40, 70],
                ["영양소2", 30, 40, 50],
                ["영양소3", 80, 50, 60],
                ["영양소4", 40, 20, 30]
            ],
            vitaCaution: "* 공복에 섭취시 위장장애로 설사를 유발할 수 있으니 음식물과 함께 섭취하거나 식후에 섭취하십시오.",
            vitaCompareSelected: false,
        },
        {
            vitaID: 4,
            vitaName: "원스데일리 포 우먼",
            vitaCompany: "얼라이브",
            vitaWishCount: 1343,
            vitaWish: false,
            vitaImage: "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210620173154233_600.jpg&w=256&q=75",
            vitaDescription: "영양제에 대한 설명이 들어갑니다. ",
            vitaFunctionality: [["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_14.04556532.svg&w=64&q=75", "시력 및 눈 피로감 케어"], ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_3.233e75b8.svg&w=64&q=75", "활력 증진"], ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_5.6c3da29b.svg&w=64&q=75", "향산화"], ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_15.d4341f14.svg&w=64&q=75", "뼈 건강"], ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_9.fefc359b.svg&w=64&q=75", "면역력 증진"]],
            vitaForm: ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75", "정"],
            vitaHowtoeat: "1일 1정을 물과 함께 섭취하십시오.",
            vitaNutrient: [
                ["영양소3", 60, 40, 70],
                ["영양소4", 30, 40, 50],
                ["영양소5", 80, 50, 60],
                ["영양소6", 40, 20, 30]
            ],
            vitaCaution: "* 특정질환, 특이체질, 알레르기체질, 임산부의 경우에는 간혹 개인에 따라 과민반응이 나타날 수 있으므로 원료를 확인하시고, 섭취전에 전문가와 상담하시기 바랍니다.",
            vitaCompareSelected: false,
        }
    ];

    // 상품 선택 여부
    // selectedProduct에 상품 정보 저장됨
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelected = (product) => {
        setSelectedProduct(product);
    };

    // 비교하기 버튼
    const showCompareButton = useSelector(state => state.showCompareButton);
    const dispatch = useDispatch();

    const handleCompareButtonClick = () => {
        dispatch({ type: 'toggle' });
    };

    return (
        <section id="compare-details-section">
            <div id="compare-details-title">
                <h2>제품을 선택해 비교해보세요</h2>
            </div>
            <div>
                {selectedProduct == null ?
                    <div id="compare-vita-space">
                        <CompareSearchButton onProductSelected={handleProductSelected}
                        ></CompareSearchButton>
                        <CompareSearchButton onProductSelected={handleProductSelected}
                        ></CompareSearchButton>
                        <CompareSearchButton onProductSelected={handleProductSelected}
                        ></CompareSearchButton>
                    </div>
                    :
                    <CompareVitaSpace
                        vitaName={[dummyVita[0].vitaName, dummyVita[1].vitaName, dummyVita[2].vitaName]}
                        vitaCompany={[dummyVita[0].vitaCompany, dummyVita[1].vitaCompany, dummyVita[2].vitaCompany]}
                        vitaWishCount={[dummyVita[0].vitaWishCount, dummyVita[1].vitaWishCount, dummyVita[2].vitaWishCount]}
                        vitaWish={[dummyVita[0].vitaWish, dummyVita[1].vitaWish, dummyVita[2].vitaWish]}
                        vitaImage={[dummyVita[0].vitaImage, dummyVita[1].vitaImage, dummyVita[2].vitaImage]}
                        vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                    ></CompareVitaSpace>}
                {!showCompareButton &&
                    <div id="compare-button-space">
                        <button type="button" onClick={handleCompareButtonClick} id="compare-button">비교하기</button>
                    </div>
                }
                {showCompareButton &&
                    <>
                        <CompareFunctionalitySpace
                            vitaFunctionality={[dummyVita[0].vitaFunctionality, dummyVita[1].vitaFunctionality, dummyVita[2].vitaFunctionality]}
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareFunctionalitySpace>
                        <hr width="1200px"></hr>
                        <CompareFormSpace
                            vitaForm={[dummyVita[0].vitaForm, dummyVita[1].vitaForm, dummyVita[2].vitaForm]}
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareFormSpace>
                        <hr width="1200px"></hr>
                        <CompareHowtoeatSpace
                            vitaHowtoeat={[dummyVita[0].vitaHowtoeat, dummyVita[1].vitaHowtoeat, dummyVita[2].vitaHowtoeat]}
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareHowtoeatSpace>
                        <hr width="1200px"></hr>
                        <CompareNutrientSpace
                            vitaNutrient={[dummyVita[0].vitaNutrient, dummyVita[1].vitaNutrient, dummyVita[2].vitaNutrient]}
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareNutrientSpace>
                        <hr width="1200px"></hr>
                        <CompareCautionSpace
                            vitaCaution={[dummyVita[0].vitaCaution, dummyVita[1].vitaCaution, dummyVita[2].vitaCaution]}
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareCautionSpace>
                        <hr width="1200px"></hr>
                        <CompareButtonsSpace
                            vitaCompareSelected={[dummyVita[0].vitaCompareSelected, dummyVita[1].vitaCompareSelected, dummyVita[2].vitaCompareSelected]}
                        ></CompareButtonsSpace>
                    </>
                }
            </div>
        </section>
    );
}

export default CompareDetailsSection;