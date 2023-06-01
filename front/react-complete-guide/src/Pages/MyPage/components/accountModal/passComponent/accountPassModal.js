import Modal from "react-modal";
import "../../accountSpec.css";
import { useState, useContext } from "react";
import axios from "axios";
import PassComponent from "./passComponent";
import CustomerInfo from "../../../../../customerInfo";

function AccountPassModal() {
  const [isOpen, setIsOpen] = useState(false);
  const userInfo = useContext(CustomerInfo);
  const { setCustomerInfo } = useContext(CustomerInfo);

  const onClickSetTrue = () => {
    setIsOpen(true);
  };
  const onClickSetFalse = async (val) => {
    setIsOpen(false);
    console.log(val);
    try {
      const data = await axios.post("/member/update", {
        ...userInfo.user,
        password: val,
      });
      console.log(data);
      setCustomerInfo({ user: data.data });
    } catch {
      console.log("err change");
    }
  };
  return (
    <div className="accountSpecText">
      <button className="accountSpecPassButton" onClick={onClickSetTrue}>
        비밀번호 변경
      </button>
      <Modal className="accountModal" isOpen={isOpen}>
        <div>
          <PassComponent onClickSetFalse={onClickSetFalse}></PassComponent>
        </div>
      </Modal>
    </div>
  );
}
export default AccountPassModal;
