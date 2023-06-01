import "./accountSpec.css";
import { useState } from "react";
import AccountNameModal from "./accountModal/nameComponent/accountNameModal";
import AccountIdModal from "./accountModal/idComponent/accountIdModal";
import AccountPhoneModal from "./accountModal/phoneComponent/accountPhoneModal";
import AccountBirthModal from "./accountModal/birthComponent/accountBirthModal";
import AccountGenderModal from "./accountModal/genderComponent/accountGenderModal";
import AccountPassModal from "./accountModal/passComponent/accountPassModal";
function AccountSpec() {
  const [isOpen, setIsOpen] = useState(false);
  const onClickSetTrue = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className="accountTitle">계정정보</div>
      <div className="accountSpecMain">
        <AccountNameModal />
        <AccountIdModal />
        <AccountPhoneModal />
        <AccountBirthModal />
        <AccountGenderModal />
        <AccountPassModal />
      </div>
    </div>
  );
}
export default AccountSpec;
