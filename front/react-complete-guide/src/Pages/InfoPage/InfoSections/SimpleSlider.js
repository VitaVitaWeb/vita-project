import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VitaBlock from '../../../CommonComponent/VitaBlock';

const SimpleSlider = () => {

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

    const vitaList = [
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210922173604436_600.jpg&w=1080&q=100", "종근당건강", "락토핏 생유산균 골드"],
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210117120537015_600.jpg&w=1080&q=100", "고려은단", "비타민C 1000"],
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210620173154233_600.jpg&w=1080&q=100", "얼라이브", "원스데일리 포 우먼"],
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F3520201226182920097_600.jpg&w=1080&q=100", "Sports Research 스포츠리서치", "Triple Strength omega-3 fish oil 1250mg"],
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F1606555889844_vRv.jpg&w=256&q=75", "센트룸", "포 우먼 멀티 비타민 미네랄"],
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F1920201226184538623_600.jpg&w=256&q=75", "Life Extension 라이프익스텐션", "투 퍼 데이 캡슐"],
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210421124529113_600.jpg&w=256&q=75", "GC녹십자", "비맥스메타"],
        ["https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F13452217992.2020121415423920210307125854254_600.jpg&w=256&q=75", "종근당", "칼슘앤마그네슘비타민D아연"]
    ];

    const vitaSource = vitaList.map((vitaSrc) => (<div><VitaBlock vitaImage={vitaSrc[0]} x={false} vitaWishCount={0} vitaCompany={vitaSrc[1]} vitaName={vitaSrc[2]}></VitaBlock></div>))

    return (
        <div>
            <style>{customStyles}</style>
            <Slider {...settings}>
                {vitaSource}
            </Slider>
        </div>
    );
}

export default SimpleSlider;