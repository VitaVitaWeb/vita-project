import axios from "axios";
import "./signUpPage.css";
import { useState } from "react";

function PhoneComponent(props) {
  const [phoneCheckText, setCheckText] = useState();
  const onTryCheckPhone = async (val) => {
    // 폰번호 중복 체크
    console.log(val);
    try {
      const data = await axios.get("/auth/phoneNoCheck", {
        params: { phoneNo: val },
      });
      console.log(data);
      if (data.data) {
        props.setPhoneCheck(true);
        setCheckText("사용 가능한 번호 입니다.");
      } else {
        props.setPhoneCheck(false);
        setCheckText("사용 불가능한 번호 입니다.");
      }
    } catch {
      console.log("error in checkId");
    }
  };
  const onChangePhone = (val) => {
    //폰번호 입력시 갱신
    props.setValue((prevState) => ({
      ...prevState,
      phoneNo: val.target.value,
    }));
    onTryCheckPhone(val.target.value);
  };

  return (
    <div className="signUpPageBox">
      <input
        className="signUpPageInput"
        placeholder="전화번호:"
        onChange={onChangePhone}
      ></input>
      <div
        className={
          props.phoneCheck ? "signUpPageCheckTrue" : "signUpPageCheckFalse"
        }
      >
        {phoneCheckText}
      </div>
    </div>
  );
}
export default PhoneComponent;
