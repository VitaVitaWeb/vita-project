import CustomerInfo from "../../../../../customerInfo";
import { useState, useContext } from "react";
import Modal from "react-modal";
import "../../accountSpec.css";
import GenderComponent from "./genderComponent";
import axios from "axios";
function AccountGenderModal() {
  const userInfo = useContext(CustomerInfo);
  const { setCustomerInfo } = useContext(CustomerInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const onClickSetTrue = () => {
    setIsOpen(true);
  };
  const onClickSetFalse = async () => {
    setIsOpen(false);
    try {
      const data = await axios.post("/member/update", {
        ...userInfo.user,
        gender: gender,
      });
      setCustomerInfo({ user: data.data });
    } catch {
      console.log("err change");
    }
  };
  return (
    <div className="accountSpecText">
      성별:{userInfo.user.gender ? "여" : "남"}
      <button className="accountSpecButton" onClick={onClickSetTrue}>
        성별 변경
      </button>
      <Modal className="accountModal" isOpen={isOpen}>
        <GenderComponent setGender={setGender} />
        <button className="modalButton" onClick={onClickSetFalse}>
          변경사항 저장
        </button>
      </Modal>
    </div>
  );
}
export default AccountGenderModal;
