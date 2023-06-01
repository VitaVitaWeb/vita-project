import CustomerInfo from "../../../../../customerInfo";
import { useState, useContext } from "react";
import Modal from "react-modal";
import "../../accountSpec.css";
import "./accountBirthModal.css";
import BirthComponent from "./birthComponent";
import axios from "axios";

function AccountBirthModal() {
  const userInfo = useContext(CustomerInfo);
  const { setCustomerInfo } = useContext(CustomerInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [birthDate, setBirthDate] = useState(new Date());
  const onClickSetTrue = () => {
    setIsOpen(true);
  };
  const onClickSetFalse = async () => {
    setIsOpen(false);
    try {
      const data = await axios.post("/member/update", {
        ...userInfo.user,
        birthDay: birthDate,
      });
      console.log(data);
      setCustomerInfo({ user: data.data });
    } catch {
      console.log("err change");
    }
  };

  return (
    <div className="accountSpecText">
      생일:{userInfo.user.birthDay}
      <button className="accountSpecButton" onClick={onClickSetTrue}>
        생일 변경
      </button>
      <Modal className="accountModal" isOpen={isOpen}>
        <BirthComponent birthDate={birthDate} setBirthDate={setBirthDate} />
        <button className="modalButton" onClick={onClickSetFalse}>
          변경사항 저장
        </button>
      </Modal>
    </div>
  );
}
export default AccountBirthModal;
