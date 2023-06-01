import Modal from "react-modal";
import "../../accountSpec.css";
import CustomerInfo from "../../../../../customerInfo";
import PhoneComponent from "./phoneComponent";
import { useState, useContext } from "react";
import axios from "axios";
function AccountPhoneModal() {
  const userInfo = useContext(CustomerInfo);
  const { setCustomerInfo } = useContext(CustomerInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [phoneVal, setPhoneVal] = useState();
  const [phoneCheck, setPhoneCheck] = useState(false);
  const onClickSetTrue = () => {
    setIsOpen(true);
  };
  const onClickSetFalse = async () => {
    setIsOpen(false);
    console.log(phoneCheck);
    if (phoneCheck) {
      console.log(userInfo.user);
      try {
        const data = await axios.post("/member/update", {
          ...userInfo.user,
          phoneNo: phoneVal,
        });
        console.log(data);
        setCustomerInfo({ user: data.data });
      } catch {
        console.log("err change");
      }
    }
    setPhoneVal("");
  };
  return (
    <div className="accountSpecText">
      전화번호:{userInfo.user.phoneNo}
      <button className="accountSpecButton" onClick={onClickSetTrue}>
        전화번호 변경
      </button>
      <Modal className="accountModal" isOpen={isOpen}>
        <PhoneComponent
          phoneVal={phoneVal}
          setPhoneVal={setPhoneVal}
          phoneCheck={phoneCheck}
          setPhoneCheck={setPhoneCheck}
        />
        <button className="modalButton" onClick={onClickSetFalse}>
          변경사항 저장
        </button>
      </Modal>
    </div>
  );
}
export default AccountPhoneModal;
