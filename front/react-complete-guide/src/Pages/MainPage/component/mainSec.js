import "./mainSec.css";
function MainSec() {
  return (
    <div className="mainSec">
      <div className="mainSecBorder">
        <div className="textBoxMainWindow">
          <h1 className="textBoxMainOne">
            영양제들의 성분의 총합이 궁금하다면?
          </h1>
          <h2 className="textBoxMainTwo">
            비타웹의 영양제 계산기를 이용하여 내가 먹고있는, 혹은 먹고싶은
            영양제들의 성분의 총합을 계산해보세요.
          </h2>
        </div>
        <div className="mainSecWindow">
          <img className="statusImgSec" alt="스탯2" src="img/Status2.png" />
          <button className="textBoxSec">영양제 계산하러 가기</button>
        </div>
      </div>
    </div>
  );
}
export default MainSec;
