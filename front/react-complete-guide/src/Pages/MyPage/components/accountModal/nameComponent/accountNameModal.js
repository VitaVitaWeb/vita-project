import Modal from "react-modal";
import "../../accountSpec.css";
import CustomerInfo from "../../../../../customerInfo";
import NameComponent from "./nameComponent";
import { useState, useContext } from "react";
import axios from "axios";

function AccountNameModal() {
  const userInfo = useContext(CustomerInfo);
  const { setCustomerInfo } = useContext(CustomerInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [nameVal, setNameVal] = useState();
  const [nicknameCheck, setNicknameCheck] = useState(false);
  const [nameCheckText, setCheckText] = useState();
  const onClickSetTrue = () => {
    setIsOpen(true);
  };
  const onClickSetFalse = async () => {
    setIsOpen(false);
    if (nicknameCheck) {
      try {
        const data = await axios.post("/member/update", {
          ...userInfo.user,
          name: nameVal,
        });
        console.log(data.data);
        setCustomerInfo({ user: data.data });
      } catch {
        console.log("err change");
      }
      setNameVal("");
    }
  };
  return (
    <div className="accountSpecText">
      닉네임:{userInfo.user.name}
      <button className="accountSpecButton" onClick={onClickSetTrue}>
        닉네임 변경
      </button>
      <Modal className="accountModal" isOpen={isOpen}>
        <NameComponent
          nameVal={nameVal}
          setNameVal={setNameVal}
          nicknameCheck={nicknameCheck}
          setNicknameCheck={setNicknameCheck}
          nameCheckText={nameCheckText}
          setCheckText={setCheckText}
        />
        <button className="modalButton" onClick={onClickSetFalse}>
          변경사항 저장
        </button>
      </Modal>
    </div>
  );
}
export default AccountNameModal;
