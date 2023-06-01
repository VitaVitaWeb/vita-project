import CustomerInfo from "../../../../../customerInfo";
import { useState, useContext } from "react";
import Modal from "react-modal";
import "../../accountSpec.css";
import "./accountIdModal.css";
import IdComponent from "./idComponent";
import axios from "axios";

function AccountIdModal() {
  const userInfo = useContext(CustomerInfo);
  const { setCustomerInfo } = useContext(CustomerInfo);
  const [isOpen, setIsOpen] = useState(false);
  const [emailCheck, setEmailCheck] = useState(true);
  const [email, setEmail] = useState({
    email: null,
    emailCom: null,
  });
  const onClickSetTrue = () => {
    setIsOpen(true);
  };
  const onClickSetFalse = async () => {
    setIsOpen(false);
    if (emailCheck) {
      try {
        const data = await axios.post("/member/update", {
          ...userInfo.user,
          id: email.email + "@" + email.emailCom,
        });
        console.log(data);
        setCustomerInfo({ user: data.data });
      } catch {
        console.log("err change");
      }
      setEmail({ email: null, emailCom: null });
    }
  };
  return (
    <div className="accountSpecText">
      아이디:{userInfo.user.id}
      <button className="accountSpecButton" onClick={onClickSetTrue}>
        아이디 변경
      </button>
      <Modal className="accountModal" isOpen={isOpen}>
        <IdComponent
          emailCheck={emailCheck}
          setEmailCheck={setEmailCheck}
          email={email}
          setEmail={setEmail}
        />
        <button className="modalButton" onClick={onClickSetFalse}>
          변경사항 저장
        </button>
      </Modal>
    </div>
  );
}
export default AccountIdModal;
