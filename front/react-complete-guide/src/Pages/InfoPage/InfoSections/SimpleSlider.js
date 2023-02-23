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

    const imageList = [
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210117120537015_600.jpg&w=1080&q=100",
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210922173604436_600.jpg&w=1080&q=100",
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210620173154233_600.jpg&w=1080&q=100",
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F3520201226182920097_600.jpg&w=1080&q=100",
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F1606555889844_vRv.jpg&w=1080&q=100",
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F1920201226184538623_600.jpg&w=1080&q=100",
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F%EC%BA%A1%EC%B2%9820210421124529113_600.jpg&w=1080&q=100",
        "https://aimee.kr/_next/image?url=https%3A%2F%2Flive-aimee-photo.s3.ap-northeast-2.amazonaws.com%2Fthumb600%2F13452217992.2020121415423920210307125854254_600.jpg&w=1080&q=100"
    ];

    const imageSource = imageList.map((imgSrc) => (<div><VitaBlock src={imgSrc} x={false}></VitaBlock></div>))

    return (
        <div>
            <style>{customStyles}</style>
            <Slider {...settings}>
                {imageSource}
            </Slider>
        </div>
    );
}

export default SimpleSlider;