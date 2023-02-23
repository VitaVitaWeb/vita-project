import "./mainThird.css";
function MainThird() {
  return (
    <div className="mainThird">
      <div className="mainThirdBorder">
        <div className="mainThirdImgWindow">
          <img className="vitaminImg3" alt="비타민3" src="img/Vitamin3.png" />
          <button className="textBoxThird">영양제 비교하러 가기</button>
        </div>
        <div className="mainThirdTextWindow">
          <h1 className="mainThirdTextMain">
            영양제들의 성분차이가 궁금하다면?
          </h1>
          <h2 className="mainThirdTextInfo">
            비타웹의 비교하기 기능을 이용하여 영양제들의 성분을 정확히
            비교해보세요.
          </h2>
        </div>
      </div>
    </div>
  );
}
export default MainThird;
