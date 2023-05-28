import React from "react";
import "./CarouselComponent.css"; // Import CSS

function CarouselComponent() {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div
          className="carousel-item active blur-image"
          data-bs-interval="10000"
          style={{
            backgroundImage:
              'url("https://health.chosun.com/site/data/img_dir/2020/04/29/2020042901784_0.jpg")',
          }}
        >
          <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle text-center">
            <h5
              className="text-white"
              style={{ fontFamily: "Verdana", fontSize: "80px" }}
            >
              안녕하세요!
            </h5>
            <p></p>
            <p
              className="text-white"
              style={{ fontFamily: "Verdana", fontSize: "30px" }}
            >
              영양제 정보사이트 Vita Web입니다!
            </p>
          </div>
        </div>
        <div
          className="carousel-item blur-image"
          data-bs-interval="2000"
          style={{ backgroundImage: 'url("/img/mainsecond.png")' }}
        >
          <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle text-center">
            <h5
              className="text-white"
              style={{ fontFamily: "Verdana", fontSize: "70px" }}
            >
              영양제 비교하기
            </h5>
            <p
              className="text-white"
              style={{ fontFamily: "Verdana", fontSize: "30px" }}
            >
              영양제를 비교해보세요!
            </p>
            <p
              className="text-white"
              style={{ fontFamily: "Verdana", fontSize: "24px" }}
            >
              어느 영양제가 더 영양소가 많은지 알아보세요!
            </p>
          </div>
        </div>
        <div
          className="carousel-item blur-image"
          style={{ backgroundImage: 'url("/img/mainthird.png")' }}
        >
          <div className="carousel-caption d-none d-md-block position-absolute top-50 start-50 translate-middle text-center">
            <h5 className="text-white" style={{ fontSize: "70px" }}>
              영양제 정보보기
            </h5>
            <p></p>
            <p
              className="text-white"
              style={{ fontFamily: "Verdana", fontSize: "24px" }}
            >
              원하는 영양제에 대한 자세한 정보를 드립니다!
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselComponent;
