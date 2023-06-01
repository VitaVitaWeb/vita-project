import "./accountSurvey.css";
import AccountSurveyForma from "./accountSurveyForma";
function AccountSurvey() {
  return (
    <div>
      <div className="accountTitle">선호 영양제 태그</div>
      <div className="accountSpecMain">
        <AccountSurveyForma />
        <div className="accountSpecText">효능:버튼 여러개</div>
      </div>
    </div>
  );
}
export default AccountSurvey;
