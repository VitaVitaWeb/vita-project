import './VitaInfoPageStyle.css';
import InfoIntroSection from './InfoSections/InfoIntroSection';
import InfoDetailsSection from './InfoSections/InfoDetailsSection';
import InfoRecommendAnotherSection from './InfoSections/InfoRecommendAnotherSection';
import TopBar from '../../CommonComponent/TopBar/topBar';
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VitaInfoPage() {
    const dummyVita = [
        {
            vitaID: 1,
            vitaName: "임팩타민",
            vitaCompany: "대웅제약",
            vitaWishCount: 1234,
            vitaWish: false,
            vitaImage: "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210425133213465_600.jpg&w=256&q=75",
            vitaFunctionality: [["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_3.233e75b8.svg&w=64&q=75", "활력 증진"],
            ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_5.6c3da29b.svg&w=64&q=75", "향산화"],
            ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_15.d4341f14.svg&w=64&q=75", "뼈 건강"],
            ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fic_PROP_STAT_9.fefc359b.svg&w=64&q=75", "면역력 증진"]],
            vitaForm: ["https://aimee.kr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCODE_3_1.cd6875f2.svg&w=64&q=75", "정"],
            vitaHowtoeat: "만 12세 이상 및 성인 : 1일 1회 1~2정, 식후복용",
            vitaNutrient: [
                [50, 70],
                [70, 50],
                [30, 60],
                [40, 30]
            ],
            vitaCaution: "섭취 시 유의사항에 대한 내용이 들어갑니다"
        }
    ];

    const { id } = useParams();
    const [vitaData, setVitaData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`/vita/${id}`);
            console.log(result.data); // 로그 추가
            setVitaData(result.data);
        }
        fetchData();
    }, [id]);


    if (!vitaData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <InfoIntroSection
                vitaName={vitaData.name}
                vitaWishCount={dummyVita[0].vitaWishCount}
                vitaWish={dummyVita[0].vitaWish}
                vitaLink={vitaData.link}
                vitaCat1={vitaData.category1}
                vitaCat2={vitaData.category2}
                vitaCat3={vitaData.category3}
                vitaCat4={vitaData.category4}
                vitaImage={vitaData.img_path}
            />
            <InfoDetailsSection
                vitaNumber={vitaData.vno}
                vitaHowtoeat={dummyVita[0].vitaHowtoeat}
                vitaCaution={dummyVita[0].vitaCaution}
            />
            <InfoRecommendAnotherSection
                vitaCat={vitaData.category3}
            />
            <TopBar />
        </div>
    );
}

export default VitaInfoPage;