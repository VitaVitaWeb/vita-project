import "./accountSurvey.css";
import AccountSurveyForma from "./accountSurveyForma";
import AccountSurveyFunc from "./accountSurveyFunc";
function AccountSurvey() {
  return (
    <div>
      <div className="accountSurveyFormTitle">선호 영양제 형태</div>
      <div className="accountSurveyMain">
        <AccountSurveyForma />
      </div>
      <div className="accountSurveyFuncTitle">선호 영양제 기능</div>
      <div className="accountSurveyMain">
        <AccountSurveyFunc />
      </div>
    </div>
  );
}
export default AccountSurvey;
