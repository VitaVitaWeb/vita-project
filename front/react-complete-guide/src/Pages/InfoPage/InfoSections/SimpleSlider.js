import Slider from "react-slick";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VitaBlock from "../../../CommonComponent/VitaBlock";

const SimpleSlider = (props) => {
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

  const [vitaListData, setVitaListData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("/vita/list");
      console.log(result.data); // 로그 추가

      // category3에 해당하는 영양제만 필터링
      const filteredData = result.data.filter(
        (vita) => vita.category3 === props.vitaCat
      );

      setVitaListData(filteredData);
    }
    fetchData();
  }, [props.vitaCat]);

  if (!vitaListData) {
    return <div>Loading...</div>;
  }

  const vitaSource = vitaListData.map((vitaSrc) => (
    <div>
      <VitaBlock
        vitaNumber={vitaSrc.vno}
        vitaImage={vitaSrc.img_path}
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

export default SimpleSlider;
