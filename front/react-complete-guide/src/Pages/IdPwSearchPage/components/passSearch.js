import "../searchPage.css";
import TopBar from "../../../CommonComponent/TopBar/topBar";
function PassSearch(props) {
  const OnclickIdButton = () => {
    props.setOnIdSearch(true);
  };

  const OnclickPwButton = () => {
    props.setOnIdSearch(false);
  };
  return (
    <div>
      <div className="searchPageMain">
        <div className="searchPageIdPwButtom">
          <button
            className="searchPageIdButtonDisabled"
            onClick={OnclickIdButton}
          >
            아이디 찾기
          </button>
          <button className="searchPagePwButton" onClick={OnclickPwButton}>
            비밀번호 찾기
          </button>
        </div>
        <div className="searchPageInputArea">
          <div className="idSearchPageBox">
            <div className="searchPagePwBox">
              <input
                className="idSearchPageInput"
                placeholder="이메일:"
              ></input>
              <button className="searchPageCodeButton">인증코드 보내기</button>
            </div>
            <div>
              <input
                className="idSearchPageInput"
                placeholder="인증코드:"
              ></input>
              <button className="searchPageCodeButton">인증코드 확인</button>
            </div>
          </div>
        </div>
      </div>
      <TopBar></TopBar>
    </div>
  );
}
export default PassSearch;
