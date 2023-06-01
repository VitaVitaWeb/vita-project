import CustomerInfo from "../../../customerInfo";
import { useContext } from "react";
function AccountSurveyForma() {
  const userInfo = useContext(CustomerInfo);
  return <div className="accountSpecText"></div>;
}
export default AccountSurveyForma;
