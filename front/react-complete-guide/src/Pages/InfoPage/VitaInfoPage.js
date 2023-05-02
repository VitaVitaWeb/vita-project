import './VitaInfoPageStyle.css';
import InfoIntroSection from './InfoSections/InfoIntroSection';
import InfoDetailsSection from './InfoSections/InfoDetailsSection';
import InfoRecommendAnotherSection from './InfoSections/InfoRecommendAnotherSection';
import InfoRecommendNeedSection from './InfoSections/InfoRecommendNeedSection';
import TopBar from '../../CommonComponent/TopBar/topBar';
import axios from "axios"
import React, { useState, useEffect } from 'react';

function VitaInfoPage() {
    const dummyVita = [
        {
            vitaID: 1,
            vitaName: "임팩타민",
            vitaCompany: "대웅제약",
            vitaWishCount: 1234,
            vitaWish: false,
            vitaImage: "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210425133213465_600.jpg&w=256&q=75",
            vitaDescription: "영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다. 영양제에 대한 설명이 들어갑니다.",
            vitaFunctionality: [["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_3.233e75b8.svg&w=64&q=75", "활력 증진"],
            ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_5.6c3da29b.svg&w=64&q=75", "향산화"],
            ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_15.d4341f14.svg&w=64&q=75", "뼈 건강"],
            ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_9.fefc359b.svg&w=64&q=75", "면역력 증진"]],
            vitaForm: ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75", "정"],
            vitaHowtoeat: "만 12세 이상 및 성인 : 1일 1회 1~2정, 식후복용",
            vitaNutrient: [
                ["영양소1", 50, 40, 70],
                ["영양소2", 70, 40, 50],
                ["영양소3", 30, 50, 60],
                ["영양소4", 40, 20, 30]
            ],
            vitaCaution: "섭취 시 유의사항에 대한 내용이 들어갑니다"
        }
    ];

    const [vitaData, setVitaData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('/vita/1');
            console.log(result.data); // 로그 추가
            setVitaData(result.data);
        }
        fetchData();
    }, []);


    if (!vitaData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <InfoIntroSection
                vitaName={vitaData.name}
                vitaWishCount={dummyVita[0].vitaWishCount}
                vitaWish={dummyVita[0].vitaWish}
                vitaImage={vitaData.img_path}
                vitaDescription={dummyVita[0].vitaDescription}
            />
            <InfoDetailsSection
                vitaFunctionality={dummyVita[0].vitaFunctionality}
                vitaForm={dummyVita[0].vitaForm}
                vitaHowtoeat={dummyVita[0].vitaHowtoeat}
                vitaNutrient={dummyVita[0].vitaNutrient}
                vitaCaution={dummyVita[0].vitaCaution}
            />
            <InfoRecommendAnotherSection />
            <InfoRecommendNeedSection />
            <TopBar />
        </div>
    );
}

export default VitaInfoPage;