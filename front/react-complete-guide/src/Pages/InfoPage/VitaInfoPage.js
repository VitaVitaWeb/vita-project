import "./VitaInfoPageStyle.css";
import InfoIntroSection from "./InfoSections/InfoIntroSection";
import InfoDetailsSection from "./InfoSections/InfoDetailsSection";
import InfoRecommendAnotherSection from "./InfoSections/InfoRecommendAnotherSection";
import TopBar from "../../CommonComponent/TopBar/topBar";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VitaInfoPage() {
  const dummyVita = [
    {
      vitaCompany: "대웅제약",
      vitaWish: false,
    },
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
      <TopBar />
      <InfoIntroSection
        vitaName={vitaData.name}
        vitaNumber={vitaData.vno}
        vitaWish={dummyVita[0].vitaWish}
        vitaLink={vitaData.link}
        vitaCat1={vitaData.category1}
        vitaCat2={vitaData.category2}
        vitaCat3={vitaData.category3}
        vitaCat4={vitaData.category4}
        vitaImage={vitaData.img_path}
      />
      <InfoDetailsSection vitaNumber={vitaData.vno} />
      <InfoRecommendAnotherSection vitaCat={vitaData.category3} />
    </div>
  );
}

export default VitaInfoPage;
