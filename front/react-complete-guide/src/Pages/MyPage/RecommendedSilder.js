import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VitaBlock from "../../CommonComponent/VitaBlock";

const RecommendedSlider = ({ selectedOptions, selectedOptions2 }) => {
  const customStyles = `
        .slick-prev:before, .slick-next:before {
            color: #FF5C35;
        }
        .slick-slider {
            margin: 0 20px;
        }
        .slick-prev:before, .slick-next:before {
            opacity: 1;
        }

        .slick-prev {        
            left: 0px;
            z-index: 9999;           
        }
        
        .slick-next {          
            right: 0px;
            z-index: 9999           
        }

        .slick-slide img {
            margin: auto;
        }
    `;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [recommendedVitaListData, setRecommendedVitaListData] = useState([]);

  useEffect(() => {
    async function fetchVitaData() {
      // Fetch all vitamins data
      const allVitaResponse = await axios.get("/vita/list");

      const allVitaList = allVitaResponse.data;

      const selectedOptionsValues = selectedOptions.map(
        (option) => option.value
      );
      const selectedOptions2Values = selectedOptions2.map(
        (option) => option.value
      );

      const recommendedVitaList = [];

      for (let vita of allVitaList) {
        const vitaFunctionResponse = await axios.get(
          `/vita/function/${vita.vno}`
        );
        const vitaFunctionData = vitaFunctionResponse.data;

        const isMatched =
          selectedOptionsValues.every(
            (value) => vitaFunctionData[value] === 1
          ) &&
          selectedOptions2Values.every(
            (value) => vitaFunctionData[value] === 1
          );

        if (isMatched) {
          recommendedVitaList.push(vita);
        }
      }

      setRecommendedVitaListData(recommendedVitaList);
    }

    fetchVitaData();
  }, [selectedOptions, selectedOptions2]);

  if (!recommendedVitaListData) {
    return <div>Loading...</div>;
  }

  const vitaSource = recommendedVitaListData.map((vitaSrc) => (
    <div>
      <VitaBlock
        vitaNumber={vitaSrc.vno}
        vitaImage={vitaSrc.img_path}
        vitaWishCount={0}
        vitaName={vitaSrc.name}
      ></VitaBlock>
    </div>
  ));

  return (
    <div>
      <style>{customStyles}</style>
      <Slider {...settings}>{vitaSource}</Slider>
    </div>
  );
};

export default RecommendedSlider;
